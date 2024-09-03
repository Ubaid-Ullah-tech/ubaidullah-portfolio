import React from "react";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: 'https://www.w3.org/html/logo/img/html5-display.png',
      name: "HTML",
    },
    {
      id: 2,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkMYb955fj7IRiw-8g6gmn5GoZzKni1Kv8g&s",
      name: "CSS",
    },

    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "JavaScript",
    },

    {
      id: 4,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s",
      name: "React",
    },

    {
      id: 5,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-e_zLyIIrlVMxClajEd6a1KCSg8D5koXLQ&s",
      name: "Node js",
    },

    {
      id: 6,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFX07-KmUNvMnp10yRr1ZcRyvAQyNUuu6yVJuf1D1E1XYpp8mvhMgtiQ02Wh2VB1nB0sc&usqp=CAU",
      name: "Express js",
    },

    {
      id: 7,
      logo: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
      name: "Boostrap",
    },

    {
      id: 8,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
      name: "Tailwind CSS",
    },
 
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;