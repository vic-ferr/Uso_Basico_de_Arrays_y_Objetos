const radiologia = [
    {
      "HORA": "11:00",
      "ESPECIALISTA": "IGNACIO SCHULZ",
      "PACIENTE": "FRANCISCA ROJAS",
      "RUT": "9878782-1",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
      "PACIENTE": "PAMELA ESTRADA",
      "RUT": "15345241-3",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:00",
      "ESPECIALISTA": "FERNANDO WURTHZ",
      "PACIENTE": "ARMANDO LUNA",
      "RUT": "16445345-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:30",
      "ESPECIALISTA": "ANA MARIA GODOY",
      "PACIENTE": "MANUEL GODOY",
      "RUT": "17666419-0",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "16:00",
      "ESPECIALISTA": "PATRICIA SUAZO",
      "PACIENTE": "RAMON ULLOA",
      "RUT": "14989389-K",
      "PREVISION": "FONASA"
    }
   ];

   const traumatologia = [
    {
      "HORA": "8:00",
      "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
      "PACIENTE": "PAULA SANCHEZ",
      "RUT": "15554774-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "10:00",
      "ESPECIALISTA": "RAUL ARAYA",
      "PACIENTE": "ANGÉLICA NAVAS",
      "RUT": "15444147-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "10:30",
      "ESPECIALISTA": "MARIA ARRIAGADA",
      "PACIENTE": "ANA KLAPP",
      "RUT": "17879423-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "ALEJANDRO BADILLA",
      "PACIENTE": "FELIPE MARDONES",
      "RUT": "1547423-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "CECILIA BUDNIK",
      "PACIENTE": "DIEGO MARRE",
      "RUT": "16554741-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "12:00",
      "ESPECIALISTA": "ARTURO CAVAGNARO",
      "PACIENTE": "CECILIA MENDEZ",
      "RUT": "9747535-8",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "12:30",
      "ESPECIALISTA": "ANDRES KANACRI",
      "PACIENTE": "MARCIAL SUAZO",
      "RUT": "11254785-5",
      "PREVISION": "ISAPRE"
    }
   ];

   const dental = [
    {
      "HORA": "11:00",
      "ESPECIALISTA": "IGNACIO SCHULZ",
      "PACIENTE": "FRANCISCA ROJAS",
      "RUT": "9878782-1",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
      "PACIENTE": "PAMELA ESTRADA",
      "RUT": "15345241-3",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:00",
      "ESPECIALISTA": "FERNANDO WURTHZ",
      "PACIENTE": "ARMANDO LUNA",
      "RUT": "16445345-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:30",
      "ESPECIALISTA": "ANA MARIA GODOY",
      "PACIENTE": "MANUEL GODOY",
      "RUT": "17666419-0",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "16:00",
      "ESPECIALISTA": "PATRICIA SUAZO",
      "PACIENTE": "RAMON ULLOA",
      "RUT": "14989389-K",
      "PREVISION": "FONASA"
    }
   ];

console.log("console");

   const primeraAtencionRadiologica = document.getElementById("primeraAtencionRadiologica");

   const primeraAtencionTraumatologica = document.getElementById("primeraAtencionTraumatologica");

   const primeraAtencionDental = document.getElementById("primeraAtencionDental");




   const ultimaAtencionRadiologica = document.getElementById("ultimaAtencionRadiologica");

   const ultimaAtencionTraumatologica = document.getElementById("ultimaAtencionTraumatologica");

   const ultimaAtencionDental = document.getElementById("ultimaAtencionDental");


 primeraAtencionRadiologica.innerHTML = `${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION}`;
 primeraAtencionTraumatologica.innerHTML = `${traumatologia[0].PACIENTE} - ${traumatologia[0].PREVISION}`;
 primeraAtencionDental.innerHTML = `${dental[0].PACIENTE} - ${dental[0].PREVISION}`;
 

 ultimaAtencionRadiologica.innerHTML = `${radiologia[radiologia.length -1].PACIENTE} - ${radiologia[radiologia.length -1].PREVISION}`;
 ultimaAtencionTraumatologica.innerHTML = `${traumatologia[traumatologia.length -1].PACIENTE} - ${traumatologia[traumatologia.length -1].PREVISION}`;
 ultimaAtencionDental.innerHTML = `${dental[dental.length -1].PACIENTE} - ${dental[dental.length -1].PREVISION}`;




const tBodyRadiologia = document.getElementById("tBodyRadiologia");

const tBodyTraumatologia = document.getElementById("tBodyTraumatologia");

const tBodyDental = document.getElementById("tBodyDental");




// metodo forEach

radiologia.forEach((ob , i )=> {
  
  tBodyRadiologia.innerHTML += `  
  <tr>
  <th scope="row">${i + 1}</th>
  <td>${ob.HORA}</td>
  <td>${ob.ESPECIALISTA}</td>
  <td>${ob.PACIENTE}</td>
  <td>${ob.RUT}</td>
  <td>${ob.PREVISION}</td>
  </tr>
  `;
})




 console.log("---- my for one ----")


 for (const listaTrauma of traumatologia) {
  
  let i = traumatologia.indexOf(listaTrauma);
   tBodyTraumatologia.innerHTML += `<tr>
   <th scope="row">${i+1}</th>
   <td>${listaTrauma.HORA}</td>
   <td>${listaTrauma.ESPECIALISTA}</td>
   <td>${listaTrauma.PACIENTE}</td>
   <td>${listaTrauma.RUT}</td>
   <td>${listaTrauma.PREVISION}</td>
   </tr>`
   console.log(listaTrauma)
 }





console.log ("--- my for two----");


for (const listaDental of dental) {
 
  let i = dental.indexOf(listaDental);
  tBodyDental.innerHTML += `<tr>
  <th scope="row">${i+1}</th>
  <td>${listaDental.HORA}</td>
  <td>${listaDental.ESPECIALISTA}</td>
  <td>${listaDental.PACIENTE}</td>
  <td>${listaDental.RUT}</td>
  <td>${listaDental.PREVISION}</td>
  </tr>`
  console.log(listaDental)
}

// let i = 0 ; 0 <dental.length ; i++;
// let a = [dental.length]