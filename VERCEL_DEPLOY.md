# 🚀 Desplegar en Vercel con Serverless Functions

## 📋 Pasos para configurar

### 1. Subir el código a GitHub
```bash
git add .
git commit -m "feat: Agregar Vercel Serverless Functions para emails"
git push
```

### 2. Configurar Variables de Entorno en Vercel

Ve a tu proyecto en Vercel → **Settings** → **Environment Variables** y agrega:

| Variable | Valor |
|----------|-------|
| `SMTP_HOST` | `smtp.zoho.com` |
| `SMTP_PORT` | `587` |
| `SMTP_SECURE` | `false` |
| `SMTP_USER` | `contacto@grupohcsolutions.com` |
| `SMTP_PASSWORD` | `kKbATZSBPEmW` |
| `SMTP_FROM` | `contacto@grupohcsolutions.com` |
| `ADMIN_EMAIL` | `contacto@grupohcsolutions.com` |

**⚠️ IMPORTANTE:** Marca todas como **Production**, **Preview** y **Development**

### 3. Redesplegar

Después de agregar las variables, haz un nuevo deploy:
- Opción 1: Push a GitHub (auto-deploy)
- Opción 2: En Vercel → **Deployments** → **Redeploy**

## ✅ ¿Cómo funciona?

### En Desarrollo (localhost)
```
Formulario → http://localhost:3001/api/contact → Servidor local
```

### En Producción (Vercel)
```
Formulario → https://tudominio.com/api/contact → Vercel Serverless Function
```

## 🧪 Probar en producción

1. Ve a `https://tudominio.com/contact`
2. Llena el formulario
3. Envía el mensaje
4. Deberías recibir:
   - ✉️ Email al admin con los datos
   - ✉️ Email de confirmación al usuario

## 📂 Estructura de archivos

```
api/
  └── contact.js          # Serverless Function (antes server/index.js)
server/
  ├── index.js            # Servidor local para desarrollo
  └── README.md           # Documentación del servidor local
src/
  └── components/
      └── FormContacto.tsx # Detecta automáticamente dev vs prod
vercel.json               # Configuración de Vercel
.env                      # Variables para desarrollo local
.env.example              # Ejemplo de variables
```

## 🔧 Desarrollo Local

Si quieres probar el backend localmente:

```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend local
npm run server
```

## 🌐 URLs

- **Producción:** `https://tudominio.com/api/contact`
- **Desarrollo:** `http://localhost:3001/api/contact`

## 📝 Notas

- ✅ Vercel Serverless Functions son **gratis** hasta 100GB de ejecución
- ✅ No necesitas mantener un servidor corriendo 24/7
- ✅ Escala automáticamente
- ✅ Mismo dominio que tu frontend
- ⚠️ Las variables de entorno en Vercel deben estar configuradas ANTES del deploy
