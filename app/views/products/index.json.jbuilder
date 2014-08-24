json.array!(@products) do |product|
  json.extract! product, :id, :name, :description, :price, :reward_points_cost
  json.url product_url(product, format: :json)
end
