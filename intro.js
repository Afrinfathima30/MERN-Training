// ============================================
// CAMPUS PULSE
// STUDENT DIRECTORY
// ============================================


// ============================================
// SELECT DOM ELEMENTS
// ============================================

const studentInput =
    document.getElementById("studentInput");

const addStudentBtn =
    document.getElementById("addStudentBtn");

const studentList =
    document.getElementById("studentList");

const studentCount =
    document.getElementById("studentCount");

const heroCount =
    document.getElementById("heroCount");

const message =
    document.getElementById("message");

const emptyState =
    document.getElementById("emptyState");


// ============================================
// STUDENT COUNTER
// ============================================

let totalStudents = 0;


// ============================================
// ADD STUDENTS BUTTON
// ============================================

addStudentBtn.addEventListener(
    "click",
    function () {


        // ----------------------------------------
        // GET INPUT VALUE
        // ----------------------------------------

        const inputValue =
            studentInput.value.trim();


        // ----------------------------------------
        // CHECK EMPTY INPUT
        // ----------------------------------------

        if (inputValue === "") {

            message.textContent =
                "Please enter three student names.";

            return;
        }


        // ----------------------------------------
        // CONVERT INPUT INTO ARRAY
        // ----------------------------------------

        const students =
            inputValue
                .split(",")
                .map(name => name.trim())
                .filter(name => name !== "");


        // ----------------------------------------
        // CHECK EXACTLY THREE NAMES
        // ----------------------------------------

        if (students.length !== 3) {

            message.textContent =
                "Please enter exactly three names separated by commas.";

            return;
        }


        // Clear previous message

        message.textContent = "";


        // Hide empty state

        emptyState.style.display = "none";


        // ========================================
        // CREATE STUDENT CARDS
        // ========================================

        students.forEach(function (student) {


            // ------------------------------------
            // CREATE CARD
            // ------------------------------------

            const card =
                document.createElement("article");

            card.classList.add(
                "student-card"
            );


            // ------------------------------------
            // CREATE STUDENT NUMBER
            // ------------------------------------

            const number =
                document.createElement("span");

            number.classList.add(
                "student-number"
            );


            totalStudents++;


            number.textContent =
                `STUDENT ${String(totalStudents).padStart(2, "0")}`;


            // ------------------------------------
            // CREATE AVATAR
            // ------------------------------------

            const avatar =
                document.createElement("div");

            avatar.classList.add(
                "student-avatar"
            );


            // First letter of student name

            avatar.textContent =
                student
                    .charAt(0)
                    .toUpperCase();


            // ------------------------------------
            // CREATE NAME
            // ------------------------------------

            const name =
                document.createElement("h3");

            name.textContent =
                student;


            // ------------------------------------
            // CREATE ROLE
            // ------------------------------------

            const role =
                document.createElement("p");

            role.textContent =
                "MERN Stack Student";


            // ------------------------------------
            // APPEND ELEMENTS
            // ------------------------------------

            card.appendChild(number);

            card.appendChild(avatar);

            card.appendChild(name);

            card.appendChild(role);


            // ------------------------------------
            // ADD CARD TO PAGE
            // ------------------------------------

            studentList.appendChild(card);

        });


        // ========================================
        // UPDATE COUNTERS
        // ========================================

        studentCount.textContent =
            String(totalStudents).padStart(2, "0");


        heroCount.textContent =
            totalStudents;


        // ========================================
        // CLEAR INPUT
        // ========================================

        studentInput.value = "";


        // Focus input

        studentInput.focus();

    }
);