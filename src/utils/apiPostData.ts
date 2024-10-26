export const apiPostData = async <T>(url: string, data: T): Promise<void> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    // const result = await response.json()

    // if (!result.success) {
    //   throw new Error('Failed to post data')
    // }
    // Assuming the response doesn't always contain a success field.
    const result = await response.json()
    console.log('Data posted successfully', result)
  } catch (error) {
    console.error('Error posting data:', error)
    throw error
  }
}
