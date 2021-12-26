const Link = (name, url) => {
    return <p key={name}><a key={name} href={url} target="_blank">{name}</a></p>
}

export default Link;