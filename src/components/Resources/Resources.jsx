import React, { Component } from "react";
import "./Resources.css";

// const getResourceList = function (resourceEdges){
//   const resourceArray = Array.from(resourceEdges);
//   console.log (typeof resourceArray)
// }

const resourceEdgesToList = function(rEdges){

  rEdges.map((edge) => {
    console.log(edge.node);
    console.log(edge.node.id);
    console.log(edge.node.frontmatter.title);
    console.log(edge.node.frontmatter.tags);
    console.log(edge.node.frontmatter.url);
    console.log(edge.node.html);

  });
} 
  

  

class Resources extends Component {
    render(){
      const { resourceEdges } = this.props;

      const resourceList = resourceEdgesToList(resourceEdges);

      console.log(resourceList);
      console.log(typeof resourceList);

      return (
        <div className="resources">
          {resourceEdges.map(edge => (
            <h2>
              
              {edge.node.frontmatter.title}
            </h2>
            ))}
        </div>
      )

      // const resourceList = getResourceList(resourceEdges);
        // return(
        //   <div className="resources">
        //     <ul>
        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://commandlinepoweruser.com/" target="_blank" rel="noopener noreferrer">Wes Bos&apos;s Command Line Power User Course</a>
        //           </h2>
        //           <p>This is a free course from Wes Bos, designed to help you attain a better terminal setup.  He goes over different terminal options for Mac and Windows users, as well as several terminal plug-ins that will make your life easier as a developer.  I personally use Windows Terminal with WSL, zsh and oh-my-zsh.</p>
        //         </div>

        //       </li>
        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://beginnerjavascript.com/" target="_blank" rel="noopener noreferrer">Wes Bos&apos;s Beginner Javascript Course</a>
        //           </h2>
        //           <p>I came from a background in back-end development, so I needed to get my front-end skills up to snuff. In this course, Wes Bos explains everything from debugging tools to loops, promises, async await -- all with great examples that are easy to follow. Truthfully, I have not finished the course yet, but I would not have been able to get this blog up without completing the parts that I have so far. </p>
        //         </div>

        //       </li>

        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://syntax.fm/" target="_blank" rel="noopener noreferrer">Syntax (Web Development Podcast)</a>
        //           </h2>
        //           <p>Syntax is by far my favorite podcast, and such an excellent and entertaining resource for web developers of any skill level. Focused primarily on Javascript, hosts Scott Tolinski and Wes Bos talk on topics such as testing, security, accessibility, soft skills, React, Svelte, Vue, and the list goes on...  </p>
        //         </div>

        //       </li>

        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://www.leveluptutorials.com/" target="_blank" rel="noopener noreferrer">Level Up Tutorials</a>
        //           </h2>
        //           <p>
        //             Level Up Tutorials has, well... tutorials that will level up your development skills! Scott Tolinksi puts out a new tutorial series every month, on topics ranging from CSS layouts, testing, Javascript frameworks, and more.You can either buy courses a la carte, or sign up for an annual subscription to get acces to each monthly series.Completing the 
        //             {' '}
        //             <a href="https://www.leveluptutorials.com/tutorials/pro-gatsby-2" target="_blank" rel="noopener noreferrer">Pro Gatsby 2 course </a>
        //             {' '}
        //             was instrumental in this blog coming together. Level Up Tutorials also has a
        //             {' '}
        //             <a href="https://www.youtube.com/user/LevelUpTuts" target="_blank" rel="noopener noreferrer">YouTube channel</a>
        //             {' '}
        //             with lots of free content.
        //           </p>
        //         </div>

        //       </li>

        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://www.youtube.com/user/TechGuyWeb" target="_blank" rel="noopener noreferrer">Brad Traversy&apos;s YouTube Channel</a>
        //           </h2>
        //           <p>
        //             Before I started this blog, I felt overwhelmed trying to research what framework I should use, if any.  Watching his 
        //             {' '}
        //             <a href="https://www.youtube.com/watch?v=0pThnRneDjw" target="_blank" rel="noopener noreferrer">Web Development in 2020 video</a>
        //             {' '}
        //             helped answer a lot of my questions, and definitely gave me a better idea of what my options where, given the direction I wanted to take. His channel also has &quot;crash courses&quot; that give you a quick run-down of a topic in about an hour or two.  His 
        //             {' '}
        //             <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" target="_blank" rel="noopener noreferrer">NPM Crash Course</a> 
        //             {' '}
        //             helped me get a core foundation of npm, and allowed me to get past a lot of frustrating npm installs.
        //           </p>
        //         </div>

        //       </li>

        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://frontendmasters.com/" target="_blank" rel="noopener noreferrer">Frontend Masters</a>
        //           </h2>
        //           <p>
        //             This is a platform that allows you to learn basically any frontend technology through video tutorials. Frontend Masters is similar to Level Up Tutorials, but with a couple of key differences.  On Level Up Tutorials, most courses are taught by one instructor; Frontend Masters brings in many industry professionals to teach their courses. Frontend Masters also allows you to preview the first part of any course before deciding to buy in.  However, Frontend Masters does not offer an &quot;a la cart&quot; option, and you must pay the monthly fee to get access to any and all courses. I personally do not have a subscription to Frontend Masters, but find it useful to get a quick peek into a given topic.  They also offer a mobile app so you can watch videos on the go.     
        //           </p>
        //         </div>

        //       </li>

        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://regexr.com/" target="_blank" rel="noopener noreferrer">RegExr</a>
        //           </h2>
        //           <p>
        //             &quot;Regex is easy, and I never need to look it up&quot;, said no one ever.  Regex is something I always feel overwhelmed by, and RegExr is an excellent tool to &quot;ease the pain&quot;, so to speak.  It allows you to save patterns, view regex documentation, and even search commonly-used patterns.
        //           </p>
        //         </div>

        //       </li>

        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow" target="_blank" rel="noopener noreferrer">DesignCourse (YouTube Channel)</a>
        //           </h2>
        //           <p>
        //             I have not watched many DesignCourse videos, but I can tell that it is quality content, with solid information.  As you might guess from the name, the focus is more on the design aspect of frontend development.  When I first set up my Digital Ocean droplet, I browsed through the one-click installs and realized I didn&apos;t know what a lot of the software was.  I was interested in Ghost, and ended up on this 
        //             {' '}            
        //             <a href="https://www.youtube.com/watch?v=PE1rGl1HKr4" target="_blank" rel="noopener noreferrer">two-part series,</a>
        //             {' '}
        //             which really gave me some insight on how to leverage modern frontend technology.
        //           </p>
        //         </div>

        //       </li>

        //       <li>

        //         <div>
        //           <h2>
        //             <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">DigitalOcean</a>
        //           </h2>
        //           <p>
        //             DigitalOcean is a developer-focused service that allows you to host and scale your web application.&quot;Developer-focused&quot; meaning that you get virtual access to your server, as opposed to more generic hosting solutions that give you drag-and-drop interfaces. This means that you get to install the OS of your choice, and configure it with as much storage and computing power as you need. DigitalOcean also offers &quot;1-Click Applications&quot; through their 
        //             <a href="https://marketplace.digitalocean.com/" target="_blank" rel="noopener noreferrer"> marketplace</a>
        //             , so you can quickly get started with things like Docker, a LAMP stack, and Wordpress.
        //           </p>
        //         </div>

        //       </li>

        //     </ul>
        //   </div>
        // )
    }
}

export default Resources;