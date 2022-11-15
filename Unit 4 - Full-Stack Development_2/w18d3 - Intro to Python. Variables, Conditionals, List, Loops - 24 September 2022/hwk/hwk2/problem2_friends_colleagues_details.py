# Problem 2: Friends, Colleagues, and Details

employees = [
    {
        "name": "Ron Swanson",
        "age": 55,
        "department": "Management",
        "phone": "555-1234",
        "salary": "$87,000"
    }, 
    {
        "name": "Leslie Knope",
        "age": 40,
        "department": "Middle Management",
        "phone": "555-4321",
        "salary": "$75,000"
    }, 
    {
        "name": "Andy Dwyer",
        "age": 79,
        "department": "Shoe Shining",
        "phone": "555-1122",
        "salary": "$50,000"
    },
    {
        "name": "April Ludgate",
        "age": 18,
        "department": "Administration",
        "phone": "555-3345",
        "salary": "$68,000"
    }
]

for employee in employees:
    print(
        "{0} in {1} can be reached at {2}".format(employee["name"], employee["department"], employee["phone"])
    )
