/* eslint-disable prettier/prettier */
import * as views from "./views";

export default st => `
${views[st.view](st)}
`;

// import html from "html-literal";

// export default () => html`
//   <section id="jumbotron">
//     <h2>Savvy Coders Jan. 2020 Cohort</h2>
//     <a href="">"Call to Action" "Button"</a>
//   </section>

//   <form id="register" method="POST" action="">
//     <div>
//       <label for="username">Username:</label>
//       <input type="text" name="username" id="username" placeholder="Enter Your Username">
//     </div>
//     <div>
//       <label for="password">Password:</label>
//       <input type="password" name="password" id="password">
//     </div>
//     <div>
//       <label for="email">Email:</label>
//       <input type="email" name="email" id="email" placeholder="your@email.here">
//     </div>
//     <input type="submit" name="register" value="Register">
//   </form>

// `;
