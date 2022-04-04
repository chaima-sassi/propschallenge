function Main({projectData}){






    return(
        <div>
   <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
              {projectData.map(el=><div class="project-card">
          <img src={el.img} alt="project" />
          <h3>{el.name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>)}       
      

      </div>
    </section>
          
    
        </div>
    )
    
    
    }
    
    export default Main