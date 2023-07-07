classDiagram
    class LibrarySystem {
        -login(username: string, password: string): boolean
    }

    class User {
        -username: string
        -password: string
    }

    class Librarian {
        +checkoutBook(memberNumber: string, copyNumber: string): void
    }

    class Administrator {
        +addMember(memberInfo: MemberInfo): void
        +editMember(memberNumber: string, memberInfo: MemberInfo): void
        +addBook(bookInfo: BookInfo): void
    }

    class Member {
        -memberNumber: string
        -firstName: string
        -lastName: string
        -address: Address
        -phoneNumber: string
        -checkoutRecord: CheckoutRecord
    }

    class Address {
        -street: string
        -city: string
        -state: string
        -zip: string
    }

    class Author {
        -firstName: string
        -lastName: string
        -address: Address
        -phoneNumber: string
        -credentials: string
        -bio: string
    }

    class Book {
        -title: string
        -ISBN: string
        -authors: Author[]
        -availability: boolean
    }

    class Copy {
        -copyNumber: string
        -book: Book
    }

    class CheckoutRecord {
        -checkoutEntries: CheckoutEntry[]
    }

    class CheckoutEntry {
        -bookCopy: Copy
        -checkoutDate: Date
        -dueDate: Date
    }

    class MemberInfo {
        -firstName: string
        -lastName: string
        -address: Address
        -phoneNumber: string
    }

    class BookInfo {
        -title: string
        -ISBN: string
        -authors: Author[]
        -availability: boolean
    }

    LibrarySystem o-- User
    LibrarySystem o-- Librarian
    LibrarySystem o-- Administrator
    User <|-- Librarian
    User <|-- Administrator
    User <|-- Member
    Member o-- CheckoutRecord
    MemberInfo <|-- Member
    BookInfo <|-- Book
    Copy <-- Book
    CheckoutRecord o-- CheckoutEntry
    CheckoutEntry <-- Copy
