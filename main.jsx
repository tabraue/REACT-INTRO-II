const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);

const { useState, useRef } = React;

const Header = ({ name, hora }) => {
  return (
    <div className="header">
      <h1>Hola {name}</h1>
      <p>{hora}</p>
    </div>
  );
};

const Students = ({ name, grades, description }) => {
  return (
    <div className="student">
      <h1>{name}</h1>
      <p>{grades}</p>
      {description && <Description description={description} />}
    </div>
  );
};

const Description = ({ description }) => {
  return (
    <div className="desc">
      <p>Descripción: {description}</p>
    </div>
  );
};

const Ip = ({ name }) => {
  return (
    <div>
      <h1>Hola {name}</h1>
    </div>
  );
};

const getDayName = (num) => {
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  return days[num];
};

const TodayIs = ({ day }) => {
  return (
    <div>
      <p>Hoy es: {}</p>
    </div>
  );
};

const HandlingEvents = ({ name }) => {
  const handleClick = (name) => {
    // do something
    alert(`${name}, hiciste click`);
  };

  return (
    <div className="event">
      <h3>Event Handling</h3>
      <button onClick={() => handleClick('hola')}>CLICK ME!</button>
    </div>
  );
};

const DefaultPrevent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('click ok');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" onClick={(event) => console.log(event)}>
        Submit
      </button>
    </form>
  );
};

const State = () => {
  let name = ' Diana';

  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          name = 'Nuevo Nombre';
          console.log(name);
        }}
      >
        Cambiar nombre
      </button>
    </div>
  );
};

const StateTwo = () => {
  const [name, setName] = useState('un nombre');
  const [grades, setGrades] = useState([5, 10, 7.5]);
    const [student, setStudent] = useState({
		name: 'michael',
		age: 23
	})
  return (
    <div>
      <h1>{name}</h1>

      <button
        onClick={() => {
          setName('otro nombre');
        }}
      >
        Cambiar nombre
      </button>      
      <div>
        {grades.map((grade, idx) => {
          return <ol key={idx}>{grade}</ol>;
        })}
      </div>
    <button
        onClick={() => {
          setGrades([10,10,10]);
        }}
      >
        Cambiar notas
      </button>
        <div>
            <p>{student.name}</p>
            <p>{student.age}</p>
        </div>
        <button
        onClick={() => {
          setStudent({ ...student, age: 25});
        }}
      >
        Cambiar edad
      </button>

    </div>
  );
};

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [animal, setAnimal] = useState('')
    const [size, setSize] = useState('')

    const inputRef = useRef('');



    const changeName = (e) => {
        setName(e.target.value)
    }

    const handleAnimalChange = (e) => {
        setAnimal(e.target.value)
    }

    const onOptionChange = (e) => {
        setSize(e.target.value)
    }

    const validatePassword = () => {
        return password.length > 5 ? true : false
    }

    const handleInputChange = () => {
        const inputValue = inputRef.current.value // Accessing the input value via the ref
        console.log("Input Value:", inputValue)
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        if (validatePassword() && email){
            alert('todo guai')
        }else{
            alert('todo mal')
        }
    }

    return (    
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nombre:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="nombre"
          value={name}
          onChange={(e) => changeName(e)}
        />
      </label>

      <p>{name}</p>

      <br />
      <hr />
      <br />

      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

        <p>{email}</p>
      <br />
      <hr />
      <br />

      <label htmlFor="pass">
        Contraseña:
        <input
          type="password"
          name="pass"
          placeholder="contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={validatePassword() ? 'correct': 'incorrect'}
        />
      </label>

        <p className={validatePassword() ? 'correct': 'incorrect'}>{password}</p>
      <br />
      <hr />
      <br />

      <label htmlFor="animal">
        Escoge tu fav animal
        <select
          name="animal"
          id="animal"
          value={animal}
          onChange={handleAnimalChange}
        >
          <option value="perro">perro</option>
          <option value="gato">gato</option>
          <option value="jirafa">jirafa</option>
          <option value="leon">leon</option>
          <option value="no me gustan">no me gustan</option>
        </select>
      </label>

      <p>{animal}</p>

      <br />
      <hr />
      <br />

      <label htmlFor="size">
        Tu talla es: SMALL{' '}
        <input
          type="radio"
          name="size"
          value="S"
          checked={size === 'S'}
          onChange={onOptionChange}
        />
        MEDIUM{' '}
        <input
          type="radio"
          name="size"
          value="M"
            checked={size === 'M'}
          onChange={onOptionChange}
        />
        LARGE{' '}
        <input
          type="radio"
          name="size"
          value="L"
        checked={size === 'L'}
          onChange={onOptionChange}
        />
      </label>

      <p>{size}</p>

      <br />
      <hr />
      <br />

      <label htmlFor="reference">
        referencia
        <input type="text" 
            ref={inputRef} 
            onChange={handleInputChange}/>
      </label>

      <br />
      <hr />
      <br />

      <label htmlFor="terms">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Acepto los términos y condiciones
      </label>

      <br />
      <hr />
      <br />

      <button type="submit">Aceptar</button>
    </form>)
}


const elementsToRender = (
  <>
    <Header name="Clase!!!" hora="12" />
    {/*     <Students name='Ira' grades={10} description={'es una alumna maravillosa'}/>
    <Description description={'aqui hay una description la necesito'}/>
    <HandlingEvents name='yo misma'/>  
    <DefaultPrevent/>
    <State/> */}
    
    <Form />
  </>
);
root.render(elementsToRender);
