const HandleSubmitData = async ({level, timeTaken, errorsCount }) => {
    try {
        const urlParts = level.split('/');
        const levelNumber = parseInt(urlParts[urlParts.length - 1]);
        // Crear un objeto limpio con los datos
        const user_id = localStorage.getItem("userId")
        const name = localStorage.getItem("UserName")
        console.log("User id:", user_id);
        const payload = {
            user_id,
            name,
            levelNumber,
            timeTaken,
            errorsCount,
        };
        console.log("Datos a enviar:", payload);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/Level`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(payload), // Convertir solo datos simples a JSON
        });
  
        if (!response.ok) {
            throw new Error("Error al enviar los datos al servidor.");
        }
    
        const data = await response.json();
        console.log("Datos enviados correctamente:", data);
    } catch (error) {
        console.error("Error al guardar los datos:", error.message);
    }
  };
  
  export default HandleSubmitData;
  