
# RESTful APIs
- HTTP-based client-server architecture: APIs use client-server architecture, where the client & the server are seperated from each other & requests are made over HTTP.

- Stateless communication: APIs are stateless, means that the server doesnt need to store any information about the session. Each request is independent of the previous request.

- Identifiable resources: APIs are about resourses(e.g docc, img...) that have identifiers. In the context of Resful APIs, the identifiers are URLs.

- Representable resources: The resourses are represented in a format that suit for the client. currently the most common format is JSON.

- Manipulation of resourses through representations: the resourses can be manipulated through representations of their identifiers.

- Self-descriptive messages: The messages that are sent between the client and the server are self-descriptive. i.e: they contain the information that is needed to understand the message. In the context of HTTP, this includes using HTTP status codes.

# API design & REST

Comtemporaty Restful APIs use HTTP as the communication protocol, which is stateless by design.