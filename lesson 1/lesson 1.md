# The Internet

The internet is a global network of **interconnected computers**.

It enables devices worldwide to share and access information through websites, email, and other services.

> **Protocols:** A series of rules for communication.

All data is subdivided into packets.

> **The web** is a system of interlinked documents and multimedia that are connected through hyperlinks.

- **Web:** One particular service of the internet
- **Browser:** A tool to navigate the web.
- **Internet:** The actual network.

![alt text](image.png)

> **ISP:** Internet service provider. Acts as the bridge between users and the global internet.
> **Internet backbone:** Made of optic fiber

At the user level, internet access depends on local networks (**LANs**) and various connection types.

## How Data Travels
- The process begins by sending a request to your router/modem. 
- It then forwards the request to your ISP data center.
- At the ISP data center, the request is processed by servers.

## Network Protocols
- **TCP/IP:** Transmission Control Protocol/Internet Protocol
- **HTTP/HTTPS:** HyperText Transfer Protocol/Secure
- **DNS:** Domain Name System

### TCP/IP
These two protocols work together to ensure that the communication between `a` and `b` is efficient and reliable. The difference with the protocol **UDP** is that the protocol gives no reliability.

### HTTP
This protocol defines how a browser and a server exchange content.

HTTP follows a **request-response model**. Every action on the browser triggers a new request to the server.

>**HTTPS** Encrypts data using TLS (Transport Layer Security) ensuring confidentiality and integrity. Provides authentication with an SSL/TLS certificate.

### Other Protocols 
#### UDP
Alternative to TCP that prioritizes speed over reliability. Unlicke TCP, UDP does not establish a connection before sending data or chekc if packet arrives

#### FTP
> **FTP:** File Transfer Protocol

#### SMTP/IMAP
For sending emails

## DNS and IP addressing
A **URL (Uniform Resource Locator)** is the complete web address used to locate resources on the internet. It consist of several parts:
![alt text](image-1.png) 

> An **IP Address** is a unique numerical identifier assigned to each device connected to the internet or a local network. It allows devices to find and communicate with each other.
- **IPv4:** 4 sets of numbers, around 4 billion of unique addresses
- **IPv6:** A newer version with longer addresses

> **DNS (Domain Name System)** is a system that translate human readable doamin names (like google.com) into machine readable IP addresses 

![alt text](image-2.png)

## Client-Server Architecture
The client-server architecture is a fundamental model of communication in computer networks where clients request services and servers provide them:
- The client is a device (computer, smartphone, tablet) or a software (browser) that initiates a request for a resource
- The server is a machine that stores, processes and delivers the requested resources

![alt text](image-3.png)

- Cliend sends a request
- Server processes the request
- Server sends the response and the HTTP status code
- Server renders the response

### Types of servers in the client-server model
In a client server architecture, different types of servers handle various requests:
- **Web Servers:** Handles HTTP/HTTPS requests and delivers web pages
- **Application Server:** Processes business logic and dynamic content
- **Database Server:** Stores and manage structured data
- **Files Server:** provedes access to shared files over a network
- **Authentication Server:** Manages user authentication and access control

![alt text](image-4.png)