const List = () => {
const tech = [
        {
            id: 1,
            name: 'Angular',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
        },
        {
            id: 2,
            name: 'Vue.js',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
        },
        {
            id: 3,
            name: 'PHP',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg'
        },
        {
            id: 4,
            name: 'MongoDB',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg'
        },
        {
            id: 5,
            name: 'MySQL',
            image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg'
        },
        {
            id: 6,
            name: 'GitHub',
            image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        },
    ];

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
            <h1>My Favourite Technologies</h1>

            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: 0
            }}>
                {tech.map(item => (
                    <li key={item.id} style={{
                        border: '1px solid #ddd',
                        padding: '15px',
                        borderRadius: '10px',
                        width: '150px'
                    }}>
                        <img
                            width="80"
                            height="80"
                            src={item.image}
                            alt={item.name}
                            style={{ objectFit: 'contain' }}
                        />

                        <p style={{ fontWeight: 'bold' }}>
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;