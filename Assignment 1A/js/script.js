const form=document.getElementById("form");
function validation() {
    var name = document.getElementById('name').value;
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;

    if(name == "") {
        document.getElementById('fullname').innerHTML = " ** <small>Please fill the name field</small>";
        return false;
    }
    if(!isNaN(name)) {
        document.getElementById('fullname').innerHTML = " ** <small>Only characters are allowed</small>";
        return false;
    }

    if(user == "") {
        document.getElementById('username').innerHTML = " ** <small>Please fill the username field</small>";
        return false;
    }
    if(user.length < 3 || user.length > 20) {
        document.getElementById('username').innerHTML = " ** <small>Username length must be between 2 and 20</small> ";
        return false;
    }
    if(!isNaN(user)) {
        document.getElementById('username').innerHTML = " ** <small>Only characters are allowed</small>";
        return false;
    }

    if(email == "") {
        document.getElementById('emailids').innerHTML = " ** <small>Please fill the email field</small>";
        return false;
    }
    if(email.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = " **<small> @ position is Invalid</small>";
        return false;
    } 
    if((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = " **<small> . position is Invalid</small>";
        return false;
    } 

    if(pass == "") {
        document.getElementById('password').innerHTML = " **<small> Please fill the password field</small>";
        return false;
    }
    if(pass.length < 6 || pass.length > 20) {
        document.getElementById('cpassword').innerHTML = " ** <small>Password does not match</small> ";
        return false;
    }
      
    if(cpass == "") {
        document.getElementById('cpassword').innerHTML = " ** <small>Please fill the comfirm password field</small>";
        return false;
    }
    if(pass != cpass) {
        document.getElementById('password').innerHTML = " ** <small>Password length must be between 6 and 20</small> ";
        return false;
    }

    if(mobile == "") {
        document.getElementById('mobileno').innerHTML = " ** <small>only digits allowed no characters</small>";
        return false;
    }
    if(isNaN(mobile)) {
        document.getElementById('mobileno').innerHTML = " ** <small>Please fill the mobile number field</small>";
        return false;
    }
    if(mobile.length !=10) {
        document.getElementById('mobileno').innerHTML = " ** <small>Mobile number must have 10 digits only</small>";
        return false;
    }  
    
    form.addEventListener('submit',function(event){
    
        if(isFormValid()==true) {
            form.onsubmit();
        }
        else {
            event.preventDefault();
        }
        
    });
    
    function isFormValid() {
        const inputContainers = form.querySelectorAll('.form-group');
        let result = true;
        return result;
        console.log(result)
    }
    
}



var barChartData = {
    labels: [
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    datasets: [
      {
        label: "Web Development",
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 1,
        data: [57, 50, 62, 75]
      },
      {
        label: "App Development",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: [44, 73, 32, 61]
      },
      {
        label: "Cloud Computing",
        backgroundColor: "lightgreen",
        borderColor: "green",
        borderWidth: 1,
        data: [82,73,42,68]
      },     
      {
        label: "Machine Learning",
        backgroundColor: "lavendar",
        borderColor: "purple",
        borderWidth: 1,
        data: [43,44,75,51]
      },
      {
        label: "Computer Networks",
        backgroundColor: "navy",
        borderColor: "black",
        borderWidth: 1,
        data: [,45,79,71]
      },
      {
        label: "Blockchain",
        backgroundColor: "yellow",
        borderColor: "orange",
        borderWidth: 1,
        data: [ , ,72,31]
      },
    ]
  };
  
  var chartOptions = {
    responsive: true,
    legend: {
      position: "right"
    },
    title: {
      display: true,
      text: "Number of users enrolled each course per year"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
          display: true,
          labelString: "In percent(%)",
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Years",
        }
      }]
    }
  }
  
  window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions
    });
  };




