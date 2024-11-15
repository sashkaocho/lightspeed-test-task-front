import axios from "axios"
import { IProduct } from "../ts/product.types.ts"
import { storeId, token } from "../constants/store.ts"

export async function fetchRecentlyUpdatedProducts(): Promise<any> {
  try {
    const response = await axios.get(
      `https://app.ecwid.com/api/v3/${storeId}/products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response.data.items
  } catch (error) {
    console.error("Error fetching products:", error)
  }
}

export async function exportProductsToCSVFormat(
  selectedProducts: IProduct[],
): Promise<any> {
  if (selectedProducts.length === 0) {
    alert("Please select products to export.")
    return
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/export-products",
      { products: selectedProducts },
      { responseType: "blob" },
    )

    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "selected_products.csv")
    document.body.appendChild(link)
    link.click()
    link.remove()
  } catch (error) {
    console.error("Error exporting products:", error)
    alert("Failed to export products. Please try again.")
  }
}
