import React from 'react';
import AboutImage from '../assets/meatballs.png'
import '../styles/About.css'

export default function About(props) {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}>
            </div>
            <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam odio reiciendis velit doloremque accusamus, quidem expedita officia officiis porro eveniet et aut. Cumque repellat velit inventore eum eaque sequi minima iste veniam molestiae laborum dicta quod laboriosam praesentium odit reprehenderit excepturi quaerat perferendis vel, in officia sed. Veritatis assumenda dolor explicabo quam inventore cumque consequatur nesciunt culpa tenetur necessitatibus hic unde labore voluptatibus sequi, temporibus officia porro error. Ullam fuga veritatis non mollitia reprehenderit nobis est ab! Dolorem, totam vitae praesentium officia quae, nostrum eius repellat itaque maxime cumque perferendis tempore assumenda facilis voluptate mollitia accusantium minus voluptas. Dolor, id minus temporibus fugit doloribus minima quibusdam fuga laudantium facilis. Eligendi quaerat odio doloribus dignissimos odit a corrupti illum eum voluptate. Aliquid earum asperiores, ab iusto dicta qui culpa fugit itaque consequatur! Quos neque necessitatibus, libero dolore molestias laboriosam animi modi vitae, tempore dicta recusandae consequuntur reiciendis dolor, expedita laborum pariatur reprehenderit similique ipsa quisquam illo perferendis porro voluptatum optio! Nam laborum in natus libero voluptate est itaque ex alias tempora, temporibus recusandae ducimus repellendus deserunt consequuntur voluptas corporis officiis quisquam quos, amet eaque? Quos asperiores ad facilis a ullam placeat voluptatum, numquam in perspiciatis tenetur, aut nostrum atque at?</p>
            </div>
        </div>
    );
}

