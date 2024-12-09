/**
 * API Documentation
 * 
 * Base URL: http://localhost:3000
 * 
 * Endpoints:
 * 
 * 1. Get all students
 *    - URL: /student
 *    - Method: GET
 *    - Response: Array of all students
 * 
 * 2. Get student by ID
 *    - URL: /student/:id
 *    - Method: GET
 *    - URL Params: id=[string]
 *    - Response: Student object or message if not found
 * 
 * 3. Get students by name
 *    - URL: /student/name/:name
 *    - Method: GET
 *    - URL Params: name=[string]
 *    - Response: Array of students with matching name or message if not found
 * 
 * 4. Get students by class
 *    - URL: /student/class/:studentClass
 *    - Method: GET
 *    - URL Params: studentClass=[string]
 *    - Response: Array of students in the class or message if not found
 * 
 * 5. Add a new student
 *    - URL: /student
 *    - Method: POST
 *    - Body: { name: [string], nameClass: [string] }
 *    - Response: New student object or message if error
 * 
 * 6. Update student by ID
 *    - URL: /student/:id
 *    - Method: PUT
 *    - URL Params: id=[string]
 *    - Body: { name: [string], nameClass: [string] }
 *    - Response: Updated student object or message if error
 * 
 * 7. Delete student by ID
 *    - URL: /student/:id
 *    - Method: DELETE
 *    - URL Params: id=[string]
 *    - Response: Deleted student object or message if not found
 * 
 * 8. Get all classes
 *    - URL: /class
 *    - Method: GET
 *    - Response: Array of all classes
 * 
 * 9. Get class by ID
 *    - URL: /class/:id
 *    - Method: GET
 *    - URL Params: id=[string]
 *    - Response: Class object or message if not found
 * 
 * 10. Add a new class
 *     - URL: /class
 *     - Method: POST
 *     - Body: { name: [string] }
 *     - Response: New class object or message if error
 * 
 * 11. Update class by ID
 *     - URL: /class/:id
 *     - Method: PUT
 *     - URL Params: id=[string]
 *     - Body: { name: [string] }
 *     - Response: Updated class object or message if error
 * 
 * 12. Delete class by ID
 *     - URL: /class/:id
 *     - Method: DELETE
 *     - URL Params: id=[string]
 *     - Response: Deleted class object or message if not found or if students are in the class
 */