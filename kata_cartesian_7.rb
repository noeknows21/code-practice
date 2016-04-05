n= 730

big_arr = []
#mak big_arr 2d and input x values
(1..n).each do |x|
  n.times{big_arr << [x]}
end
z = 0
zz = n
#input y values into big_arr
while n**2 >= zz do
  big_arr[z...zz].each_with_index do |x, y|
    x << (y +1)
  end
  z += n
  zz += n
end

min_arr = big_arr.map do |x|
  x.min
end

min = min_arr.inject(:+)

max_arr = big_arr.map do |x|
  x.max
end

max = max_arr.inject(:+)

p max + min
  