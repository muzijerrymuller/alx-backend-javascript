class HolbertonCourse:
    def __init__(self, name: str, length: int, students: list):
        if not isinstance(name, str):
            raise TypeError("name must be a string")
        if not isinstance(length, (int, float)):
            raise TypeError("length must be a number")
        if not isinstance(students, list) or not all(isinstance(student, str) for student in students):
            raise TypeError("students must be a list of strings")

        self._name = name
        self._length = length
        self._students = students

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value: str):
        if not isinstance(value, str):
            raise TypeError("name must be a string")
        self._name = value

    @property
    def length(self):
        return self._length

    @length.setter
    def length(self, value: int):
        if not isinstance(value, (int, float)):
            raise TypeError("length must be a number")
        self._length = value

    @property
    def students(self):
        return self._students

    @students.setter
    def students(self, value: list):
        if not isinstance(value, list) or not all(isinstance(student, str) for student in value):
            raise TypeError("students must be a list of strings")
        self._students = value
