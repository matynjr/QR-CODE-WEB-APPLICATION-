

const Menu = () => {
  const menuItems = [
    { id: 1, label: 'SIGN-UP', link: '/' },
    { id: 2, label: 'LOGIN', link: '/about' },
    { id: 3, label: 'FAQS', link: '/services' },
  ];

  return (
    <div className="menu">
      <ul className="menu-list">
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
