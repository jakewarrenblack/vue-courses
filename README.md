# Vue Courses :school:
## IADT Creative Computing Year 3 - Frontend Frameworks CA2
### CRUD management system for a fictional college.
<hr/>
Vue CRUD application allowing users to view and manipulate data about courses, lecturers and enrolments at a college. Authentication and data access is provided by a REST API. Application also incorporates Vuex for state management and the Vuetify design framework. 
<hr/>  

## Features:
### Required:
<ul>
  <li>Full CRUD implementation including delete courses/lecturers + their respective enrolments.</li>

  <li>Login/Registration</li>

</ul>

### Extras
<ul>
  <li>Client (Vuelidate) and server-side form validation on all forms, including login/register which makes use of Vuex for returning errors.</li>

  <li>Random homepage image each day from Unsplash/Pexels.</li>

  <li>Dialogs to confirm all delete operations.</li>

  <li>Using Vuetify design framework.</li>

  <li>Dynamic snackbar component to display warnings or success confirmations.</li>

  <li>Vuex state management, incorporated into dialogs and snackbars.</li>

  <li>Simple lecturer images from dicebear.com avatar API</li>
  
  <li>Pagination using Vue-Paginate plugin</li>
  
  <li>Animations (fade transition) between pages</li>

  <li>Dark mode</li>
</ul>
<hr/>

<details>
  <summary><b>View gallery</b></summary>
  
  ### Homepage, new image every day from Unsplash or Pexels (Dark mode on)
  ![home](https://user-images.githubusercontent.com/47800618/146282326-24456e3a-b55b-4b07-a341-049b9313be4f.png)
  
  <hr/>
  
  ### All Courses
  ![all_courses](https://user-images.githubusercontent.com/47800618/146282544-9a989b46-9032-45b6-bd34-24720b4d23c7.png)
  
  <hr/>
  
  ### View Course Details
  ![view_course](https://user-images.githubusercontent.com/47800618/146282597-175c58bd-d4c3-401d-bc37-c8947b875ffd.png)
  
  <hr/>
  
  ### Edit Course (All forms include validation with Vuelidate and server-side validation through the API
  ![course_edit](https://user-images.githubusercontent.com/47800618/146282681-0bf44e4c-6b69-4b7b-9dcd-2b7ae1c7347f.png)
  
  <hr/>
  
  ### Deleting a Course (Dialog runs the delete method, will delete all enrolments first, then the course)
  ![course_with_dialog](https://user-images.githubusercontent.com/47800618/146282736-fd596d8d-c411-4cf0-8e6e-859c3e15b286.png)
  
  ### View all lecturers
  ![all_lecturers](https://user-images.githubusercontent.com/47800618/146282820-bebe3f38-693b-4d4d-b5f6-9ca096806d5d.png)
  
</details>
<hr/>
## Project setup

```
npm i
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
