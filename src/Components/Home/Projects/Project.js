import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

const Project = () => {
    const projects = [{
        id: 1,
        name: "Royal Furniture",
        heading: "Royal Furniture is full stack e-commerce website.",
        description: "Complete web application with dynamic products, blogs, reviews, and dashboard. User can order product, cancel order, give review, read blogs and can send email through the website. Admin can add, update and delete products and blogs. Admin can change order status and also can see todays, pending and total order. Firebase authentication & hosting, stripe payment gateway are also included. ",
        preview: "https://royal-furniture-6905b.firebaseapp.com/",
        github: "https://github.com/naeemmahmud70/Royal-furniture-client",
        image: "https://i.postimg.cc/1zJyWt0r/Screenshot-40.png"
    }, {
        id: 2,
        name: "Patients Care",
        heading: "Patients Care is a full stack doctor portal website. ",
        description: "Full-Stack web application with dynamic appointment, prescription and dashboard. Patients can take appointment and can get prescription. Doctor can give prescription, change appointment status and also can see todays, pending and total patients. Firebase authentication & hosting are also used.",
        preview: "https://patients-care-ec054.web.app/",
        github: "https://github.com/naeemmahmud70/Patients-care-client",
        image: "https://i.postimg.cc/4xGKqYcD/Screenshot-49.png"
    }, {
        id: 3,
        name: "BlogNet",
        heading: "BlogNet is a full-stack blog website.",
        description: "Full-Stack blog website with dynamic blog post and admin panel. User can read blog and can comment on the blog. Admin can post and delete blog as per need. Custom authentication & netlify hosting are also included. ",
        preview: "https://blognet370.netlify.app/",
        github: "https://github.com/naeemmahmud70/Retro-blog-client",
        image: "https://i.postimg.cc/L61Cvbky/Screenshot-52.png"
    }, {
        id: 4,
        name: "Royal Planner",
        heading: "Royal Planner is a full stack event management website.",
        description: " Here an authenticated user can order any kind of event service. User can see his/her order lists and give review. User can pay total cost by payment gateway. Here is different dashboard for user and admin. Admin can add, delete and update service and also can make another admins.",
        preview: "https://royal-planner.web.app/",
        github: "https://github.com/naeemmahmud70/Royel-planner-client",
        image: "https://i.postimg.cc/d0Pqs1Yr/royal.png"
    }, {
        id: 5,
        name: "FoodLand",
        heading: "FoodLand is a grocery shop full stack website.",
        description: "Here a user can see many kind of grocery products. When he will go to by a products he have to authenticated by email password and gmail account. User can see total purchased list and costs. After submitted order user can see a memo. Admin can add and remove products",
        preview: "https://grocery-shoap.web.app/",
        github: "https://github.com/naeemmahmud70/grocery-shoap-client",
        image: "https://i.postimg.cc/hjMg1171/foodland.png"
    }, {
        id: 6,
        name: "Easy Rider",
        heading: "Easy Rider is a car transporting fronted website.",
        description: "This is a transport website where a user can see few car. User can fair any of car for his transport. After clicking car name he will go to another page and user will see the fair and total capacity of the specific car. User can set destination and user will her/his destination by map.",
        preview: "https://rider-assignment.web.app/",
        github: "https://github.com/naeemmahmud70/easy-rider",
        image: "https://i.postimg.cc/pX3vCTy4/rider.png"
    }]
    return (
        <section id="projects" className="row">
            <div style={{ background: "#1E2749" }} className="d-flex justify-content-center">
                <div className="text-center mb-3">
                    <h2 className="text-color fw-bold pt-5 ">MY PROJECTS</h2>
                    <span className="animate-border"></span>
                </div>
            </div>

            <div className="projects mt-3">
                {
                    projects.map(project => <ProjectCard project={project} key={project.id}></ProjectCard>)
                }
            </div>
        </section>
    );
};

export default Project;