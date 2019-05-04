class CreateGuitarStrings < ActiveRecord::Migration[5.2]
  def change
    create_table :guitar_strings do |t|

      t.timestamps
    end
  end
end
