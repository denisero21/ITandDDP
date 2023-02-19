import socket

# Initialize the client UDP socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Prompt the user for their name and the receiver's name
sender_name = input('Enter your name: ')
receiver_name = input('Enter the receiver\'s name: ')

# Loop to send messages to the receiver
seq_num = 0
while True:
    # Prompt the user for a message to send
    message = input(f'{sender_name} > ')

    # Increment the sequence number
    seq_num += 1

    # Construct the message with the sequence number, sender name, and message text
    message_text = message + '\0'
    full_message = f'{seq_num}|{sender_name}|{message_text}'

    # Send the message to the receiver
    client_socket.sendto(full_message.encode(), ('localhost', 5000))

    # Wait for a response from the server to confirm receipt
    response, server_address = client_socket.recvfrom(1024)
    if response.decode() != full_message:
        print('Message was not received by server')
