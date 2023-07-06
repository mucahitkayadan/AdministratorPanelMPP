classDiagram
    class Library {
        - books: List
    }
    class Member {
        - memberId
        - firstName
        - lastName
        - address
        - phoneNumber
    }
    class Book {
        - isbn
        - title
        - authors
        - availability
    }
    class Librarian {
        - login()
        - checkout()
    }
    class Administrator {
        - login()
        - addMember()
        - addBook()
        - addCopy()
    }
    Library <-- Member
    Library <-- Book
    Librarian --> Library
    Administrator --> Library
