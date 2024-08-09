function openLink(platform) {
    let url = '';
    
    switch(platform) {
        case 'instagram':
            url = 'https://www.instagram.com/brunols14/';
            break;
        case 'linkedin':
            url = 'https://www.linkedin.com/in/bruno-lima-da-silva-920682266/';
            break;
        case 'github':
            url = 'https://github.com/brunols014';
            break;
        default:
            alert('Plataforma desconhecida');
            return;
    }

    window.open(url, '_blank');
}
