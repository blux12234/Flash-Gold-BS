let selectedAmount = 0;
let selectedPrice = "";

function selectPack(amount, price) {
    selectedAmount = amount;
    selectedPrice = price;
    
    // Resaltar el paquete seleccionado
    document.querySelectorAll('.pack').forEach(p => p.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    // Activar el botón de pago
    const btn = document.getElementById('btn-pay');
    btn.disabled = false;
    btn.classList.remove('btn-disabled');
}

function processOrder() {
    const playerId = document.getElementById('player-id').value;
    
    if (playerId.trim().length < 5) {
        alert("Por favor, ingresa un ID de jugador válido.");
        return;
    }

    // Configura tu número de WhatsApp aquí (con código de país, sin el +)
    const miNumero = +58 04160256643; 
    
    const mensaje = `*NUEVA ORDEN - FLASH GOLD BS*%0A%0A` +
                    `*ID Jugador:* ${playerId}%0A` +
                    `*Paquete:* ${selectedAmount} Gold%0A` +
                    `*Precio:* $${selectedPrice}%0A%0A` +
                    `Espero confirmación para el pago.`;

    const url = `https://wa.me/${miNumero}?text=${mensaje}`;
    
    window.open(url, '_blank');
}

