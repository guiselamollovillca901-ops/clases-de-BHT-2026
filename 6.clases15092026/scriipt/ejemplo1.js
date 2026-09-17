const listaEstudiantes=
[
  
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
function mostrarEstudiantes()
{
    const datos=document.getElementById("datos");
    datos.innerHTML = "";
    listaEstudiantes.forEach(
    est=> {
        fila=
        <tr>
                    <th>${est.nro}</th>
                    <th>${est.nombre}</th>
                    <th>${est.apellido}</th>
                    <th>${est.FecNac}</th>
                    <th>${est.edad} </th>
                    <th>${est.género}</th>
                 </tr>
                 ;
            datos.innerHTML+=fila;
         }
    );
}
mostrarEstudiantes();

