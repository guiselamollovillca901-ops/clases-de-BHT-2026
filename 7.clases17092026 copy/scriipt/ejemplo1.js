
const listaEstudiantes = [
  { nro: 1, nombre: "Alex", apellido: "Galviz", fechaNacimiento: "2010-03-11", edad: 16, genero: "masculino" },
  { nro: 2, nombre: "María", apellido: "López", fechaNacimiento: "2009-07-25", edad: 17, genero: "femenino" },
  { nro: 3, nombre: "Javier", apellido: "Pérez", fechaNacimiento: "2011-01-15", edad: 15, genero: "masculino" },
  { nro: 4, nombre: "Lucía", apellido: "Fernández", fechaNacimiento: "2010-09-03", edad: 16, genero: "femenino" },
  { nro: 5, nombre: "Andrés", apellido: "Mendoza", fechaNacimiento: "2008-12-20", edad: 18, genero: "masculino" },
  { nro: 6, nombre: "Sofía", apellido: "Ramírez", fechaNacimiento: "2011-05-08", edad: 15, genero: "femenino" },
  { nro: 7, nombre: "Mateo", apellido: "Castro", fechaNacimiento: "2009-11-30", edad: 17, genero: "masculino" },
  { nro: 8, nombre: "Valentina", apellido: "Rojas", fechaNacimiento: "2010-06-14", edad: 16, genero: "femenino" },
  { nro: 9, nombre: "Diego", apellido: "Suárez", fechaNacimiento: "2011-02-22", edad: 15, genero: "masculino" },
  { nro: 10, nombre: "Camila", apellido: "Ortiz", fechaNacimiento: "2009-08-19", edad: 17, genero: "femenino" }
];

function mostrarEstudiantes() {
  const datos = document.getElementById("datos");
  if (!datos) return;
  
  let contenidoTabla = "";
  
  // CORRECCIÓN: Usamos correctamente el bucle para procesar cada estudiante sin duplicados
  listaEstudiantes.forEach(est => {
    // Formateamos la fecha si existe, de lo contrario muestra un texto por defecto
    let fechaFormateada = "Sin fecha";
    if (est.fechaNacimiento) {
      const partes = est.fechaNacimiento.split('-');
      fechaFormateada = partes.length === 3 ? `${partes[2]}/${partes[1]}/${partes[0]}` : est.fechaNacimiento;
    }

    // Capitalizamos la primera letra del género para que se vea más estético (Masculino / Femenino)
    const generoFormateado = est.genero.charAt(0).toUpperCase() + est.genero.slice(1);

    contenidoTabla += `
      <tr>
        <td>${est.nro}</td>
        <td>${est.nombre}</td>
        <td>${est.apellido}</td>
        <td>${fechaFormateada}</td>
        <td>${est.edad}</td>
        <td>${generoFormateado}</td>
      </tr>
    `;
  });
  
  datos.innerHTML = contenidoTabla;
} // CORRECCIÓN: Faltaba cerrar la llave de esta función

function adicionar() {
  const inputNombre = document.getElementById("nombre");
  const inputApellido = document.getElementById("apellido");
  const inputFecha = document.getElementById("fechaNacimiento"); // MEJORA: Añadido para capturar la fecha
  const inputEdad = document.getElementById("edad");
  const inputGenero = document.getElementById("genero");
  
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const fechaNacimiento = inputFecha.value; // MEJORA: Extraemos el valor de la fecha
  const edad = inputEdad.value.trim();
  const genero = inputGenero.value.trim();
  
  if (nombre === "" || apellido === "" || fechaNacimiento === "" || edad === "" || genero === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }
  
  const nuevoEstudiante = {
    nro: listaEstudiantes.length + 1,
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento, // MEJORA: Se guarda la fecha capturada
    edad: parseInt(edad, 10),
    genero: genero
  };
  
  listaEstudiantes.push(nuevoEstudiante);
  mostrarEstudiantes();
  
  // CORRECCIÓN: Limpieza de inputs usando los nombres de tus variables exactas
  inputNombre.value = "";
  inputApellido.value = "";
  inputFecha.value = ""; // Limpia la fecha
  inputEdad.value = "";
  inputGenero.value = ""; // Cambiado de 'selectGenero' a tu variable real 'inputGenero'
  inputNombre.focus();
}

// Inicializamos la tabla al cargar la página por primera vez
mostrarEstudiantes();
