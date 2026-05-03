# 📦 Instruções de Deploy para Hospedagem Estática (HostGator/cPanel)

## ✅ Status do Projeto
- ✅ Blog 100% estático (sem dependências de backend Base44)
- ✅ Posts vêm de arquivo local: `components/data/posts.js`
- ✅ Erro `.filter()` corrigido com verificação `Array.isArray()`
- ✅ Rotas padronizadas em minúsculo: `/blog` e `/blog-post`
- ✅ Estados vazios implementados

## 🚀 Como fazer o Deploy

### 1. Build do Projeto
```bash
npm run build
```
Isso gera a pasta `dist/` com arquivos estáticos prontos.

### 2. Upload para HostGator/cPanel
- Acesse o **Gerenciador de Arquivos** do cPanel
- Navegue até `public_html/` (ou subpasta do domínio)
- Faça upload de TODOS os arquivos da pasta `dist/`

### 3. CRÍTICO: Criar arquivo .htaccess
**Crie um arquivo chamado `.htaccess`** na raiz do `public_html/` com este conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Não reescrever se for arquivo ou diretório existente
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Redirecionar tudo para index.html (SPA)
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# Cache control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Compressão Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### 4. Verificar Funcionamento
- Acesse `seudominio.com` - deve abrir a home
- Acesse `seudominio.com/blog` - deve listar os posts
- Acesse `seudominio.com/blog-post?slug=nome-do-post` - deve mostrar o post
- Recarregue F5 nas rotas - deve continuar funcionando (graças ao .htaccess)

## 🔧 Ajustes no Código Realizados

### Blog (/blog)
```javascript
// Carrega posts de arquivo local, não de API
import { postsData } from '../components/data/posts';

// Garantia de array para evitar erro .filter()
const loadedPosts = Array.isArray(postsData) ? postsData : [];
const sortedPosts = loadedPosts.filter(post => post.publicado).sort(...);
```

### Post Individual (/blog-post)
```javascript
// Carrega post de arquivo local pelo slug
const allPosts = Array.isArray(postsData) ? postsData : [];
const foundPost = allPosts.find(p => p.slug === slug && p.publicado);
```

### Estados Vazios
- Blog mostra "Nenhum post encontrado" se não houver posts
- Post individual mostra "Post não encontrado" com botão para voltar ao blog

## 📝 Nomenclatura de Arquivos
✅ **Correto (minúsculo):**
- `pages/blog.js` → rota `/blog`
- `pages/blog-post.js` → rota `/blog-post`

❌ **Evitar (maiúsculo causa problemas):**
- `pages/Blog.js`
- `pages/BlogPost.js`

## 🔍 Troubleshooting

### Site em branco após deploy
- Verifique se o `.htaccess` foi criado
- Verifique se TODOS os arquivos do `dist/` foram copiados
- Limpe cache do navegador (Ctrl+Shift+R)

### Erro 404 ao recarregar página
- Falta o `.htaccess` ou está mal configurado
- mod_rewrite pode não estar ativado no Apache (raro no HostGator)

### Blog não mostra posts
- Verifique se `components/data/posts.js` foi incluído no build
- Console do navegador (F12) deve mostrar os posts carregados

### Case sensitivity (Linux servers)
- Arquivos no servidor Linux são case-sensitive
- Use sempre minúsculas nos links: `/blog` não `/Blog`

## 💡 Dicas Extras

1. **Performance:** O `.htaccess` já inclui cache e compressão Gzip
2. **SEO:** Meta tags e Schema.org estão implementados em cada página
3. **WhatsApp:** Links funcionam em todos os CTAs
4. **Mobile:** Design 100% responsivo

## 📞 Suporte
Para dúvidas, consulte a documentação do HostGator sobre SPA (Single Page Applications) ou entre em contato com o suporte técnico deles.