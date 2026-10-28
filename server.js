const express = require('express');
const app = express();

app.use(express.json());

// Ruta de prueba para verificar que el servidor vive
app.get('/', (req, res) => {
    sendResponse = { status: "Online", service: "TCN Mercado Pago Backend" };
    res.json(sendResponse);
});

// Endpoint que llamará la máquina TCN para pedir el QR de un producto
app.post('/api/crear-qr', async (req, res) => {
    const { device_id, producto, monto } = req.body;
    
    // Aquí implementaremos la llamada a la API de Mercado Pago más adelante
    res.json({
        success: true,
        mensaje: `QR simulado para producto ${producto} por $${monto}`,
        qr_data: "https://mercadopago.cl/qr-ejemplo"
    });
});

// Endpoint Webhook donde Mercado Pago avisará cuando paguen
app.post('/api/webhook', (req, res) => {
    console.log("Notificación recibida de Mercado Pago:", req.body);
    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
