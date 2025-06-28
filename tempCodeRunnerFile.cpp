#include <iostream>
using namespace std;

void calculateGrade() {
    int marks;
    cin >> marks;
    if (marks < 0 || marks > 100) {
        cout << "Invalid marks entered.";
    }
    else if (marks < 25) {
        cout << "Fail";   
    }
    else if (marks <= 44) {
        cout << "E";
    }
    else if (marks <= 49) {
        cout << "D";
    }
    else if (marks <= 59) {
        cout << "C";
    }
    else if (marks <= 79) {
        cout << "B";
    }
    else {
        cout << "A";
    }
}

int main() {
    calculateGrade();
    return 0;
}
