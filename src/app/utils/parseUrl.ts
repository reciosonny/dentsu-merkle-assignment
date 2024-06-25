export function getDomainName(url: string) {
    // Use new URL object for parsing the URL
    const parsedUrl = new URL(url);
    // Return the hostname property which represents the domain name
    return parsedUrl.hostname;
}
