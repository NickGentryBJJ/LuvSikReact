export async function csrfFetch(url: string, options: RequestInit = {}): Promise<Response> {
    options.method = options.method || 'GET';
    options.headers = options.headers || {} as HeadersInit; // Specify the type explicitly

    if (options.method.toUpperCase() !== "GET") {
        if (!(options.headers as Record<string, string>)["Content-Type"] && !(options.body instanceof FormData)) {
            (options.headers as Record<string, string>)["Content-Type"] = "application/json"; // Specify the type explicitly
        }
        (options.headers as Record<string, string>)["X-CSRF-Token"] = sessionStorage.getItem("X-CSRF-Token") || '';
    }

    const res = await fetch(url, options);

    if (res.status >= 400) throw res;
    return res;
}

export function storeCSRFToken(response: Response): void {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

export async function restoreCSRF(): Promise<Response> {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    return response;
}

export default csrfFetch;
