import React from "react";
import Navigation from "../components/Navigation";

const Credit = () => {
  return (
    <>
      <div className="credit">
        <div className="credit-content">
          <h1>Crédits</h1>
          <p>
            Ce site utilise les technologies suivantes :
            <ul>
              <li>
                <a href="https://reactjs.org/">BootStrap</a>
              </li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque porro amet harum ipsam, impedit non necessitatibus ab
                quibusdam iure laboriosam obcaecati cumque magnam, tempore
                commodi quas nemo reprehenderit voluptatibus, incidunt
                repudiandae corporis quos eligendi temporibus. Quo vitae
                excepturi repellat impedit.
              </p>
              <li>
                <a href="https://reactjs.org/">React</a>
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                tempora quam quisquam aut numquam similique nihil eligendi
                reiciendis ut praesentium beatae velit illo deleniti nulla atque
                alias quis dicta, nesciunt odit quas quibusdam facere? Atque
                ipsum quis eligendi maiores vero aperiam laudantium officia
                exercitationem sint. Placeat beatae neque reiciendis quia!
              </p>
              <li>
                <a href="https://reacttraining.com/react-router/">
                  React Router
                </a>
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
                vero! Voluptas, vitae ad rerum illo recusandae nihil quos sint
                nam quod sunt vel expedita iste error in excepturi, sit aperiam!
                Minima quisquam cumque qui consectetur soluta dolores iure quos
                atque consequatur excepturi, quibusdam placeat, sint ad
                voluptatibus natus accusamus alias laboriosam nobis facilis
                magni unde minus. Nemo, accusamus enim. Ratione ducimus quod
                assumenda ab repellat tenetur, magnam illum est. Placeat tempora
                facere fuga, molestias dicta fugit optio quia in eaque!
              </p>
            </ul>
          </p>
          <p>
            Ce site a été réalisé par{" "}
            <a href="https://www.linkedin.com/in/mikael-trilles-a0a4b5a4/">
              Mikael Trilles
            </a>
            .
          </p>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Credit;
