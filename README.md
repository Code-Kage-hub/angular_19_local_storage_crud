---

## 📘 Angular User Management App

This is a simple **User Management CRUD application** built using Angular that:

* Stores user data in local storage
* Allows adding, editing, deleting users
* Uses template-driven forms for input validation
* Implements dynamic form rendering and view toggling
* Utilizes Bootstrap for basic styling

---

## 🛠 Features Used

| Feature                       | Description                                                                |
| ----------------------------- | -------------------------------------------------------------------------- |
| **Component-based structure** | Created a single `AppComponent` to manage the entire logic                 |
| **Template-driven forms**     | Handled with `FormsModule` and `ngModel`                                   |
| **Form validation**           | Used `required`, `minlength`, and template references for validations      |
| **Two-way data binding**      | Achieved using `[(ngModel)]`                                               |
| **Conditional rendering**     | Used `@if`, `@else`, and `@for` for template control (Angular v17+ syntax) |
| **Local Storage**             | Used `localStorage` API to persist user data                               |
| **Dynamic button rendering**  | Submit vs Update button shown conditionally                                |
| **Event handling**            | Used `(click)` and form submission with `(submit)` events                  |
| **Bootstrap integration**     | Responsive layout and UI elements styled using Bootstrap                   |

---

## 📂 Project Structure

```
src/
├── app/
│   └── app.component.ts      # Component logic (User CRUD + state management)
│   └── app.component.html    # Template with form and list views
│   └── app.component.css     # Optional custom styles
├── index.html
└── main.ts
```

---

## 👨‍💻 How the App Works

### 1. **Add a New User**

* Click "Add New User"
* Fill the form fields
* Click "Submit form"
* Data is stored in `localStorage` under the key `angular19User`

### 2. **Edit a User**

* Click "Edit" button on a user card
* The form is pre-filled with user data
* Modify the fields and click "Update"

### 3. **Delete a User**

* Click "Delete" button on a user card
* Confirmation prompt appears before deletion
* User is removed from both the UI and `localStorage`

---

## 🧠 Important Angular Concepts Used

### ✅ 1. Template-driven Forms (`FormsModule`)

* Handled user form using `ngModel` for two-way binding
* Added validations with `required` and `minlength`
* Used form reference `#formValue="ngForm"` to access form state

```ts
import { FormsModule } from '@angular/forms';
```

```html
<form #formValue="ngForm">
  <input [(ngModel)]="userObj.fname" name="fname" required>
  <button [disabled]="formValue.invalid">Submit</button>
</form>
```

---

### ✅ 2. Data Binding

#### ➤ Two-way binding:

```html
<input [(ngModel)]="userObj.city" name="city">
```

#### ➤ Event binding:

```html
<button (click)="onSave()">Submit</button>
```

---

### ✅ 3. Conditional Rendering (Angular v17+ syntax)

```html
@if (isNewUser == false) {
  <!-- List View -->
}
@else {
  <!-- Form View -->
}
```

---

### ✅ 4. LocalStorage for Data Persistence

```ts
localStorage.setItem('angular19User', JSON.stringify(this.usrList));
```

```ts
const localData = localStorage.getItem('angular19User');
if (localData != null) {
  this.usrList = JSON.parse(localData);
}
```

---

## 🧪 Form Validation Example

```html
<input [(ngModel)]="userObj.fname"
       name="fname"
       required
       minlength="3"
       #fname="ngModel">
       
@if(fname.touched){
  <div class="text-danger">
    @if(fname.errors?.['minlength']){
      <span>Min 4 characters needed</span>
    }
  </div>
}
```

---

## 🚀 Getting Started

### Prerequisites:

* Node.js
* Angular CLI (`npm install -g @angular/cli`)

### Run the App:

```
ng serve
```

Then open [http://localhost:4200]

---

## 📌 Suggestions for Future Improvements

* Use Reactive Forms for better control and scalability
* Add form reset on submit
* Integrate a backend like Firebase or Express.js
* Use a shared service to manage user state (for larger apps)
* Add unit tests for component methods

---
