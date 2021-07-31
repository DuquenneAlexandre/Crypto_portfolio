class Coin < ApplicationRecord
  belongs_to :portfolio
  before_create :slugify

  def slugify
    self.slug = coin_name.parameterize
  end

end
