const Menu = () => {
  const menuItems = [
    { id: 1, label: "SIGN-UP", link: "./Signup" },
    { id: 2, label: "LOGIN", link: "./Loggin" },
    { id: 3, label: "FAQS", link: "./Faqs" },
  ];

  return (
    <div className="menu">
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
