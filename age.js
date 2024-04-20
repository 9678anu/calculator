document.getElementById('ageForm').addEventListener('submit', function(e) {
            e.preventDefault();
            calculateAge();
        });

        function calculateAge() {
            var birthDate = new Date(document.getElementById('birthDate').value);
            var birthTime = document.getElementById('birthTime').value;
            var currentDate = new Date(document.getElementById('currentDate').value);
            var currentTime = document.getElementById('currentTime').value;

            var birthDateTime = new Date(birthDate.toDateString() + ' ' + birthTime);
            var currentDateTime = new Date(currentDate.toDateString() + ' ' + currentTime);

            var age = currentDateTime.getFullYear() - birthDateTime.getFullYear();
            var monthDiff = currentDateTime.getMonth() - birthDateTime.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && currentDateTime.getDate() < birthDateTime.getDate())) {
                age--;
            }

            var result = document.getElementById('result');
            result.innerHTML = "You are " + age + " years old.";
        }