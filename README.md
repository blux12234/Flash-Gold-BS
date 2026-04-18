<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flash-Gold-BS | Nexo de Recargas</title>
    <style>
        :root {
            --neon-gold: #ffea00;
            --neon-cyan: #00ffff;
            --bg-dark: #050509;
            --card-bg: #0d0d16;
            --text-main: #e0e0e0;
        }

        body {
            background-color: var(--bg-dark);
            background-image: 
                radial-gradient(at 10% 10%, rgba(255, 234, 0, 0.1) 0px, transparent 50%),
                radial-gradient(at 90% 90%, rgba(0, 255, 255, 0.08) 0px, transparent 50%);
            color: var(--text-main);
            font-family: 'Orkney', 'Exo 2', 'Segoe UI', sans-serif;
            margin: 0;
            padding: 20px;
            text-align: center;
        }

        h1 {
            color: #ffffff;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 4px;
            margin-top: 30px;
            margin-bottom: 5px;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
        }

        h1 span {
            color: var(--neon-gold);
            text-shadow: 0 0 20px rgba(255, 234, 0, 0.8);
        }

        p.subtitle {
            color: #888;
            margin-bottom: 40px;
            font-size: 0.85em;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 300;
        }

        .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 20px;
            max-width: 950px;
            margin: 0 auto;
            padding-bottom: 50px;
        }

        .card {
            background-color: var(--card-bg);
            background-image: url
            
