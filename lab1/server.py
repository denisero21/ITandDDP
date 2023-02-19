import socket
import time

# Initialize the server UDP socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(('localhost', 5000))

# Initialize client dictionaries to store their sequence number and received messages
clients = {}

# Listen for incoming messages from clients
while True:
    data, client_address = server_socket.recvfrom(1024)
    message = data.decode()
    message_parts = message.split('|')
    seq_num = int(message_parts[0])
    sender_name = message_parts[1]
    message_text = message_parts[2]

    # Add the client to the dictionary if it's not already there
    if sender_name not in clients:
        clients[sender_name] = {'last_seq_num': -1, 'messages': []}

    # Check if this message is a duplicate
    if seq_num <= clients[sender_name]['last_seq_num']:
        continue

    # Store the message in the client's dictionary
    clients[sender_name]['last_seq_num'] = seq_num
    clients[sender_name]['messages'].append(message_text)

    # Send the message back to the sender to confirm receipt
    server_socket.sendto(data, client_address)
    struct = time.localtime(time.time())
    now = time.strftime('%d.%m.%Y %H:%M', struct)
    # Check if the message is complete
    if '\0' in message_text:
        # Display the complete message to all clients
        for client in clients:
            for msg in clients[client]['messages']:
                print(f'{client}: {msg} | {now}')
            clients[client]['messages'] = []
