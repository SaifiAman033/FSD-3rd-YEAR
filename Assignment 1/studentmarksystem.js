let students = [
    { name: "Divya", subject: "Math", marks: 98 },
    { name: "Karan", subject: "Science", marks: 95 },
    { name: "Priya", subject: "English", marks: 92 },
    { name: "Sneha", subject: "History", marks: 88 },
    { name: "Amit", subject: "Geography", marks: 85 },
    { name: "Rahul", subject: "Physics", marks: 76 }
];

function renderTable() {
    const table = document.getElementById('studentsTable');
    table.innerHTML = "";
    students.forEach(s => {
        const row = `<tr>
            <td>${s.name}</td>
            <td>${s.subject}</td>
            <td>${s.marks}</td>
        </tr>`;
        table.innerHTML += row;
    });
    document.getElementById('stats').textContent = `Total students: ${students.length}`;
}

function showHighest() {
    const highest = students.reduce((max, student) => student.marks > max.marks ? student : max, students[0]);
    document.getElementById('message').textContent = `Highest: ${highest.name} (${highest.subject}, ${highest.marks})`;
}

function showAverage() {
    const sum = students.reduce((acc, s) => acc + s.marks, 0);
    const avg = (students.length ? (sum / students.length).toFixed(2) : 0);
    document.getElementById('message').textContent = `Average: ${avg}`;
}

function sortByMarks() {
    students.sort((a, b) => b.marks - a.marks);
    renderTable();
    document.getElementById('message').textContent = "Sorted students by marks (highest — lowest)";
}

function resetSample() {
    students = [
        { name: "Divya", subject: "Math", marks: 98 },
        { name: "Karan", subject: "Science", marks: 95 },
        { name: "Priya", subject: "English", marks: 92 },
        { name: "Sneha", subject: "History", marks: 88 },
        { name: "Amit", subject: "Geography", marks: 85 },
        { name: "Rahul", subject: "Physics", marks: 76 }
    ];
    renderTable();
    document.getElementById('message').textContent = "";
}

function removeLast() {
    if (students.length) students.pop();
    renderTable();
    document.getElementById('message').textContent = "Removed last student.";
}

function addStudent() {
    const name = document.getElementById('studentName').value.trim();
    const subject = document.getElementById('studentSubject').value.trim();
    const marks = parseInt(document.getElementById('studentMarks').value, 10);
    if (name && subject && !isNaN(marks) && marks >= 0 && marks <= 100) {
        students.push({ name, subject, marks });
        renderTable();
        document.getElementById('studentName').value = "";
        document.getElementById('studentSubject').value = "";
        document.getElementById('studentMarks').value = "";
        document.getElementById('message').textContent = `Added: ${name} (${subject}, ${marks})`;
    } else {
        document.getElementById('message').textContent = "Enter a valid name, subject, and marks (0-100).";
    }
}

renderTable();