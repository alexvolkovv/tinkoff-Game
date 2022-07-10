export class HttpWorker {
  private baseUrl: string = ''

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || ''
  }

  private getUrl(url: string) {
    if (this.baseUrl) {
      return this.baseUrl + url
    }

    return url
  }

  private createBaseOptions(methodName: string, body?: object) {
    const outputOptions: any = {
      method: methodName,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    if (body) {
      outputOptions.body = JSON.stringify(body)
    }

    return outputOptions
  }

  async post<T>(url: string, body: object, config?: object): Promise<T> {
    url = this.getUrl(url)
    const baseOptions = this.createBaseOptions('POST', body)
    const response = await fetch(url, { ...baseOptions, ...config })

    return (await response.json()) as T
  }

  async put<T>(url: string, body: object, config?: object): Promise<T> {
    url = this.getUrl(url)
    const baseOptions = this.createBaseOptions('PUT', body)
    const response = await fetch(url, { ...baseOptions, ...config })

    return (await response.json()) as T
  }

  async get<T>(url: string, config?: object): Promise<T> {
    url = this.getUrl(url)
    const baseOptions = this.createBaseOptions('GET')
    const response = await fetch(url, { ...baseOptions, ...config })

    return (await response.json()) as T
  }

  async delete<T>(url: string, config?: object): Promise<T> {
    url = this.getUrl(url)
    const baseOptions = this.createBaseOptions('DELETE')
    const response = await fetch(url, { ...baseOptions, ...config })

    return (await response.json()) as T
  }
}
