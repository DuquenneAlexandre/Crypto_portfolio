class CreateCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :coins do |t|
      t.string :coin_name
      t.string :coin_identificator
      t.string :coin_symbol
      t.string :coin_quantity
      t.string :slug
      t.references :portfolio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
