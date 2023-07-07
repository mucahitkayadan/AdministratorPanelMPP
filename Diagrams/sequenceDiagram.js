sequenceDiagram
    Librarian/Administrator ->> UI: loginRequest()
    UI -->> Librarian/Administrator: loginResponse()
    
    Administrator ->> UI: addMember()
    UI -->> Administrator: addMember()
    
    Librarian ->> UI: checkout()
    UI -->> Member: checkout()
    Member -->> UI: checkout()
    UI -->> Librarian: checkout()
    
    Administrator ->> UI: addCopy()
    UI -->> Administrator: addCopy()
