import React from "react";
import { FiClock } from "react-icons/fi";

const blogs = [
  {
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA6gMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xABGEAABBAEBBAUHCAkDAwUAAAABAAIDBBEFBhIhMRMUQVFxIjJhgZGx0QcVIzNSkqHBJEJTVWJygpOyFnPwY6LDJTRDs8L/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADsRAAIBAgQCBwYEBAcBAAAAAAABAgMRBBIhMUFRBRMyYXGBsRQikaHB8EJi0eEGIzNyFVKSwtLi8bL/2gAMAwEAAhEDEQA/APEV1lQgCAIAgCAIAgMkMUkrw2NjnE9wUqLexEpRiryZmvafboiM2q8kQkGWFw4O8CjTjuUp1qdW+R3Iqg0CAISEuBg9xQgIBg9yAICbpum29RMopwGQxN33neA3R4khTGLk7JXMq1elRSdR2vsRp4ZIHlsrd0hHFx3LxmpK6MagsEAQBAEAQBAEAQBAEAAJQkYQgIBhAEJCAAZKi6FidpzbLZWvirSy45BrCfctacmtjCs4Ws5JHTatS13XtPrNZo9kGsTugQPG8D4hbVYSkk7Hk4etg8JUk3VWvevoa+LYXaaTBGlPaD9uRjce1ywVKo/wnRLpvo+OnW/J/oTW/Jvr5aHTdTgH/UsAe4FW6ipy+Zzv+IcH+G78EZY/k+mYf0vW9Li7w2Qvx7lPs8/8yKvp6L/p0ZPyt+pSxsbp9epalG0EFieKJz2xRR+cQM45lOoeXtal6fS9adSKdBpNrdmPRdG2dsaFBZ1e9PUsyucA4EBpweGM+hVhCLipSdi2KxeNhiHChFSSsZxsns/YH6JtPG3PLpGh3uwtOoi9pmX+J42H9TDt+Bcfk8dKM09e06YnsJ3fzKj2aT43K/4/l/qUZIwTfJttAxmWCnMOzo5viAqvD1E+BpH+I8C3aWZeK/8ATLpug7U6DFYdHpT5DYbuvALX4aDkYwVrTpVIXdtSlbpDo3FyinUWm26+hzmq1dTMjnW9NswHOTvQuH5KtSNV7xfwPTw9TDpWhNPzRqy1w5tI8QsGmt0dl1wKKAME8kAwgCAIAgGCgCAIAgNlogjElqSWGOXoqzntbIMtzlvxUxV5HPiXL3Una7S9SrtTb+7qH9k/FadWirw/55fH9inzm393af8A2T8VPVrkR7P+eXx/YuZqce8A7TqGPRAfinVxW6IeHdtJy+P7FJrlVzuNKMH+BuFVyprSxeFKol2mUj1CCMeTTiP8wypVWC2iHQm95EyDaaxWH0FWowjlmIFaLGyWiijCfRtOp2pP4kr/AF/tCG7sdmKIdzImjCrLFze5j/gWCbu4t+LZHl2z2jmOHarN/Tge4LP2qfM1j0NgY7UkR5tW1+b6y5ffn+Jyq61R8TWOFwcNox+RiFfWbPlCG9Jntw4qM03zLuphYbuK+BQaPqszi01J8tOHCTycH05RqfJkvFYeKTzL78Cbs/DJT1p0E7Wh7oHgtyHDlnsPoVqKtOz5Mwxko1MPmi9LonTU/nenpdds9GiXRSS5mf0bM5HAc/8AmVfI5QijnVf2edWbjKVmlpq/oanVNn7OmBz5J6czWgEugnDxxVJ0JRV3b4nZh8dCu8qi0+9WKx7N60aTL8dCc1nt3myNI5e3KnqqvBMh9IYRVHSlNZlwMEcurVpuijkuxy4zuBzs+xRGVWLsm0aOnhpxzNRt5Exu0m0Vbh84XGY7Hn4hXWJqJ7mD6NwNT8EWZTtprzm7ktvpG9oe0LSOOrQd1YzXQuDTvGFvAiT65PY+vhidnuGMq8ukKk+1Y3hgow7LZEfPFIfKiI8CFg6sZ8DdQkuJY10O+CASc8iFXNFktSJjrzYB0Zo0XnHN0Jz71bq+Zj1LnrnkvMs+c2/u7T/7J+Knq1yI9n/PL4/sPnNv7u0/+yfinVrkPZ/zy+P7D5zb+7tP/sn4p1a5D2f88vj+xnE8VvS7zjSqxPiaxzXxR7pGXgd6pKFiqi6dWCUm733fcaY81Q7QgKIDY6QcNv8ApqP/AMmqYdryZz4jeH9y+pCPNdBsUUgr25UA6vTtJ023UjsdVe5hZl8jpHYDh2cd0ennhQ6MZvVHk18VWpzyZle+1ltz4v5Ehul6W3iypG4Z5mWM/wDmPuWbpwX3+5k8TiHvL5P/AIIzto6fybTru8IXHH3Y3e9Vyx5FOtrPVyfxX1kjPHBFAPJq7ncWVnf/AKjatIpcvl+xjKcpby+LX0bMV6cPhMLa9eUuOCySWGLh49JnPLhhaTTUdvobYem82a705KT/ANtiHNq1eG2yR3z1HG07m6Zd2HxPnZ9WVy9c3K+x6vsVHq2mrt8bK/obdjo7f0kdeSZp5OayV+fbEPeruduK+f6HOsGorSnLzcV6MxMbPDNK6WCToXEbjZq0cQZ38XPblVz/AJvki7w7td0kvGb+iZqbMUg2nrT9EQHsIJDmOHIj9Rzh+KtD+qmKtvZ5R0XcnciapSnuSUYKcZmbHFuEx+UAc8uCmpGbaUVfQjD1YU1OVR2uzP8A6dq0txl6K86UtL3GJoDQMZwCRxI9SvGhTg7VPkUeOqVLuk1bv/Zmv1LrNGMCpautquHAOLmfgq1oSg04t2f0OqjGM9asFm8L/MiUNV1CldFqnafHZI3RKSHOweGOOViqkk9GaV8PRq0+rqRTjyN9qQ1rUWuFrUa0++3BL8td7l0TVeas2mjzaLwdB+5BqxfSk1GhpvUPmWhbZxPSlzS7J9eU/mRVsiZWtGhWq9b10o92tvQ1c9WwbkM1nRJGV246SOFpAeM96zebNfIdsa0MjjGrdvizYzWdkXNd0uharWdjgWzZGfXhROVN7xaOWFPpK+laMl4foczCGjemxhoJ3QSlJX1Z6k3+ExudvEk8yt0T3FqkBAEBPpnGl6kO9kf+YWVTZ+XqYVF/Op+foa5ZHSUQBVuSTtLOG3fTVcPxarRevkznxC1h/cvqRDzW9zYplLgZS4N7s9qLoHvq9IYhPgNexjXFp/qc0cR3lE1t9/Q48ZRU0ptXtwu16Jv5HS/OdVpJa+PH8d6Nv4dI9Q4q/vS9F9Tju9lRX+mT9UiNPrNA8JZKLiOW/I94/wC2E+9Zzyc7/fcmawddaxppeEUvWaLRtDpsTedfh2V4Hu/yDFMeq4/X9EXbx8tnb/Sv+QO1untb5IsDvxWDT/8AaovS5fL/ALFepx99Z/P/AKI1NnaaQQsgrtNiEZJN4CRxOfHCpKS/D6fuzd4apU1qza/tbSLotrJGxNEtRksg7c7rR4DCuqqS29DKfRud9p2+JZNtZM97XdThDmHLSHHgVDrT5ER6MhHaRA1PXbeo7nSHowzIG453Hx4qkpuR1UMLTo3y8fA1wkc14eODgc5VU7O6Ok3bdobs7GsnnLuiaAzL93u5rqjjJLdJnD7FShLNBblNU1zVNRDRJKOiYN1scZBaAspV5y4nVLLO2bh5ESpakisxvsR7zGuyR0YOVWMlf3ilSnFxaj6m8+fdPfwkgjZn/plp/ArpVanwPO9irrZ3+BsKFzSZTkydH3ES8fY5b0nTeqZy1qOJitr+X6G/g6sGYr2iQeRcA73YWqk3xPLqdZf3o+v1ucvthaL5xSa7pWsAdIQO3sHPs/Nc2IedWTPa6LpKMesa1e33Y5m0Y+iDWxlpHIZPrKwvZJI9aCd7sh5VkzQZU3AylwMpcE2qcadfHe1n+YVJv3X5epjUX82n5+hAWNzcJcBVuSTNOOBb9Nd3vCvDd+DMay1h4ojHC1uamTq837N/sUq/Aq5RW7K9Vn/YSeppTUjrIczI2lccOFScjv6I/BVenMjrqS0zL4kd4cwkEEHtB5hVuaJ8ijN5zg1oJJ5AdqhsGQ1pzygl+4Vm2ivWQ5jq1n9hL9w/BMwzw5ooa1j9hL9wqMxOeHMp1Wx+wl+4VFx1kOZXqtj9hN9wpcdZDminVLH7Cb7hQdZDmh1Sx+wl+4fgoHWQ5lerWMY6Cb7hQdZDmOrWMfUS+uMqR1kOZUQ2xyimH9BS5GenzRkDboGOimI9MZ+CXIvT5otkisyY3oJeHLEZ+ClSCnBcSzo5ocOLJI+zJBC0VRlrxlommY3Pc9xc4lxPaeam5KVhlToCismApuQVU3AS4JVc/oF0fws/yCpN+6/L1Mp/1IefoQzzWNzcKbgoqsEqicCz/sH3hWp9oyq/h8TDz5epXb900Oo1STGrzNHJu6MZPDyQt6HYOPELUm0JsEcV0o8ytE7nZi+GlschGD3reLzKzPn+kKDazI8j2ok6TaLU3AYAtSD2EheRPts+1wCy4Wmvyr0MWz7+j1ui/wCzM0/ipp9tFsWr0Jpcjvma4Xua1rm5PDjyXoZkfO+xG1kbbj6XNioeic1pxJz3uWOHpS/cc+Sm9vv5lXstxmQGzUO5IyM4fzLiOI4cuKX7ierhv9+oLLYcR1ioQJhD9Z29/Ll6Uv3Dq6f397d4DbbnMb1imC6YxfW9oBOeXLgnkOrp/f3tqUYy490IE9MdK9zBmXkQCcnhy4Jdch1dPj97LXXvKRtuSdEBNUBlDiCZeA3eeeHsS/cOrp/ff5hguP6PE1QdJG6QZk5BuBg+nil+4dXTSv8Afrv3FsBuTx1ntmqNE7S5odKAW47+HBRdci0qNNOzZgt27FSOu97o3icEtbGd4jHeOxTdciYUISu1w+pFGsy9jHfcS5f2SC4lrtbkaPKG7nlkYyl0SsGnojS7Xal13SWtyDu2GEfdeufE2yHodG4fqqzfd9UcYuO57YVrkFVNwFa4CAICTXP6Hc/lZ/kFWWz8jOXbj5+hEWRqEBRVBJpn6/8A2j7wr0+0Z1N4+JZG3pJGsHNzgB61Z9kub7V3/wDrdvGfPA4+A9J95XRRfuo56y1JFKTiF0I4KsTpNMnw9i0R5deB53qb+k1C4/7U7z7XFeXJ3k/P1Pp6CtSgu5ehZQduXIndzlNPtomsr02jYVLjjag48S9vq4hdWfU56lFZX5ntV8SyWd3r1x1e23pLEhohuHx4LA3I71FSsqUHNrsng4TDvE1YUo2Wb6Jt+NlyLIZppYJzcnd007mzSZhAPSN8zh2YwF4lfHVZSa2S4LfR7X738j7LCdC4WkoTis0pPd7K6euXna+/HwK2pt5j3s1R7XdKJSwVN5zrQ80eHAD1r08PXd1Sn2rX8j5zG4KKhKvSjaGZxV3e9k7u+n6fAiOuTsbvxX5zOwmzC3qI8q4Wv34+XYMldl+7u9Ty7K/3zX3y7g65LDumpqE0r67jJSBo/WyuDukby7BlL80Evp6r77yrbboHjqepSymvltMdR+tY8t6U8v1VN7/fKxCjorL71J+mULNmrLfqai41aLJK1Z7q7QZI3hjicHnxGMqM8b5WtXqRVzxpZ4pWTV9db6rbwkc9s3rlTq+gVxrkMUscD43MdA0mFzsAN488qspJRbO6pha0qslCL1enm3r33+RsKU8jp6YZZiln01joziPyoHuHEYHA59OfFebicbOMlk2evPMvoe3guh6UqU1Wvmul/bq7NcJLXUkVukifp5Go4bD0wd+hhxbvdwHnZ/Bb4fGwrqzVmef0h0NPBtyi80VbxSba1XivQ4jb224aXs/iw6UdHL5PQdHucWdv6y65SS1Mejaak5rw9WcVasGWq9uScSNPHwcsasrwsetCnlnfuf0IHauY6DvdjNg/negdT1aY16QGWNBDd9v2i4+a1bU6aaz1HZHjYzpKoq/suEjmnxfBF2s7HafLG52ztulce1heYKtvpJN0czunn6lrN4Z6RTR2YdYqMb1Wmzg5Glji096xasdiZagCAzwn9Fs+Df8AJQ+y/IpLtx8/QirI0CAKoJFQ4E3+0feFenuUnvHxLqXG5C08MyNHZ3jv+BST90ubDUnD51tbrgR0hwRjj7AB7AF00uyjGojPUk4hdCZx1Im+0+bAbxWiPOqwOGsO3ppXfacT+K8rmfQxVopFIDiVp9KvT7SJlsZ9Pz1+vgu+sZ5vPmFdblKv9OXgz6AuESwQafPLrz7MpL4q5DN0tBBOMN9I7VtOKm5J9lny1GrOjSpzp262LWVa215d7NdI6QOImjdFJ+vG/iQe4r5KvTlSqODP1fB16eKoQq09n8ua9S5kD5w94be6QuMsUlYNz0o83ez2ZXsdFqpUlKrLlY+R/ierhsNGGEg0ndyt439bszSaRrbK75449bEscfWoiWxY62WuDieHLBXqqrBu2h8/7LWis+Wy+mjvv3b7kO42zRhsTxTawwVG9NUc9jPIkcHdIXcOWDwV2na9jgp16cpqCau/1Xf6eZWaKzVtRwVptabKct01ro2Zcx266XPD2KTTeKsvXvS48b8PMnMZCzTZ61SfXekrZbNEYmbsYxkDzfSEU3mtwMZ0YOkpKKz3u1ra17c+Z5jsfstNa1arY1WlebSmjfPXkrhpdIWkHIHdx4rkcHK6e1j6atjo0bZHqmr6cNfD1O6qVmVb1u9E76W05pce4NGMfiV8zOpKyg/wn3NOjCSdTdSsS4JpY7lWGMXGMk6UtkqsDncAM4zw7Rlel0XSc26j2Xr/AOHzn8TYmFKHVxXvytfmo3btut38vI4H5RDIdI2d35Ljx0c26LDGta3zPMwBkeK9mq1wPA6K7c9uHPnLm39Dhifo3+I/NYy2PX4mJYPYsevbdWGzfJ7Wi0UvNaF0PWgMfV7h3Tw/V3vxwuyrmiouWx4nRNKnGVWSvnb1vb5d1zzXZ0XPn/T/AJu3xb6wzot3nnPu7/QsZ6o9lEjbM1jtRqnUt3oOtP3N3lz4/jlE7pA0iIBSDNF/7afwb71D2ZWXaj5kdYlwgCAzVv8A5P5D+StDcrLh4l9SVsFqGV4JayRrjjOcAg8MEe9HqixlsWRYuzTAuxJI5w3iScE8M5JPtJ8VvCokkiko3M0FmNh8p4C2VaHMwnSkza1NSrt86do9auq1PmclTD1ORy5OeJ5rzrnql9dhklaxuMnPM47FeDSkisnZXZLjq2IXtka5jXNOQQ8cCtL2d0zJ1INWfobV20G0RlZM7WLRljBDH9PxaDjOO7kFZTlzMVhsI9oL4ctj0HZ0XHaTXkvzvmsy+W57zk8TwyfAr5zGSdXEPyX0PsujqUMJgkkrJJv46nC6ltTrPzlY6lqdiCBsrhGyOTAABwvoKUXRgqcXoj5CrSpYufX1oJylq9PgvLYxnbXavG7/AKh1Dd5Y6wcKe+6+X6G3Vway208yNLtRrsrXMl1e09rhgh0mQfFX6ydrZjmWAwikpKmvgVO1evukikOs2y+LO44yHLc93cmeXMt7DhrWyIq3anaBrpSzWLYMxzJ9L55xjj38gmeX+b0DwWGf4F96+pbBtFrUDYWQanYYyFpZEBJjcaeYHdyCKUlpctLCYaTbcFqdtsVqct/TpY7Mm/NXcAXZ4lrskezBC8LpOjZ9bz38T6PoXEb4a2iV14cV6faNRtXqet0dbDat+aGFsYMIZIG7oPPHjhd3R1T+RZPieb01hqMsU5VI3bS+Rzl6zqeoxQx3LZmZACIWvkB3AcZx3cgu2Us27PNpRoUbuEbXNfYryQs3nluCeGHArOb0N4yUmRVkXN9ou097SgGQzENDSwbzQ9paebXNcCHN9BW8KnudXLYwlRWfrI6Mkz7YWGxyN0yjpmmSStLZJ6NTo5HNPMBxJLR/LuqloJ6GyvxOce7eS5JapuAlwZYz9BL4D3qODKte8jAsy4QgKCTLAcdJ/IVeG5WXDxLHc1K2JJukSUY7jDqcMk1U5D2xP3XDPaD3juVZ5mrRdiU99LmbUNMZEw2KNhtmt9ocHN/mC2lT0zR1RyUcQ28lRZZfexrD6crLwOoooBQKAVyFFiSdodI6lq1WoBnpJAD/ACjifwBWdWWSDka0KfWVIx5s9itkV6UrmYaIoXOb6N1pI9y8bDLNXjfmfRdIvq8DUtya+On1PDzzXuHzBTKAZUaAKQMqAMoDsfkznLdVtwfqyV971tcMe8rmxivRfkdnRzUcZB8018r/AENv8o2n9NpsF9jfKrv3Xn+F3wOPauXAztJw5np9LUrwU1wPOTjK9Q8Ap4KbAopICkFVICsAgCAyx/VSeA96h7MjijCsywQBAZIv1/5Crw3IZaTxRbAAqQb2lfdco16LpWw2IMivLgN3snO44+7PBRRjCEm1uzHETmknJXiviu9EGSOEvmFkOgmYDhgZwLu49yvN3dnoy8NtHdGvVC5RQCoGeahg7f5MaIfdt3nNJ6FgjZkcMu5+vA/Fefj52ionrdF005ym+B2Ov4GiakRwxVl4/wBJH5rkwSvXXn6M6+mpWwT73D/7j9Dxc817R8+UUAu3R38EBsaeg6lchM0FSR0YG8DwBcP4QTl3qyrqlUauloc9TF4enLLKevx9NvM1xaAM5VDpLUsQdR8nBxtJu/aryj/tz+SxxEb0ZLuNMPLLiaT/ADL56HpV6qy9Qs1ZBlssZb/z8F4tKTjNSR9ZWgp05RZ4hNG6KZ8b/OY4td4hfQJ3Vz5BqzsWKxAQgqpAUgKSAgCAyMP0b/V70fZYMR5rMsEAQF8Zxvfyq8NyGUPNFsQUUgrvHGOHBQyTcRSRanFHBdkEVluGx2HcnD7L/wAir5k1aW5gqbpP3OzxXLvRqZGbj3MyCWkjIPAqhutUWKAAFAPY/kq0OSbZzrBJjbPM52SOLscOHsXLUwrrz1dkd1HHrDU8sY3k+bsbPbjTX6fsxqk5eHM6uWdxBJA/NKWBdCpnTurMzx/SPtOHjScbNyj4aanhLua6TmKIDe17Favp0DYYIXWnAmWV7N4jJ4AZ4DAXr4HBxa6yot9jnq+87GITv6YSl7jICDvE5K9m0bZUjNL3cvAz6jPVtafKHVoorYc17HxMDQ4ci3A8c/0rw8XgMiz09jSk8ulzQLyzoOn+TjjtXXbjJeyRg9bSqyjmi13MznNU5U5vZSj6nskWj3BGHlrBj9Uu4ry10dXyttI+nl0rhs+VNnh+2VQ0tpb8Tm7v0m9jx4r0aN8iTPDxNutbT0ZpTzWxzhSApAQBSQEAQFzThrk4AsWZYIAgLmkDOVMXYFct7ipzEWKZb3FTcWGW9xUXQK7w7il0NRlvcUugU8nuKXQK5b2ApdA9u+SvU2RbGQxvIkdHLIGtDuIGc8e5bUleJnPc6+SKDWtOsVrMW9BPGY3j0Hu+Ku1bcxnDPHLx4eKPn/a7Zyxs7qstWdjnRedDNjg9nZ61zTjkZfD4jrVZ6SWjXeYNH2c1TWN52n0JpI2jLpSN1gxz8o8PVzV6cHPZEV8XQoO05a8lq/giDv8AcThetCtZJF2i7pFp15WxVr9447+xHX0sTYx2Kk1WTctV5YXnjuysLT+K8KSSeqNIVI1Ow0z0j5IdlZJbY2gttMdePIrA85HcifAe/wAFemtcxz17VXk4LV+XD9T1F+pRxzbkgcMcz9lb5b6mlzwv5UrLbO2t1wHksDGA9+G81zS7WprHY5Lye4qt0SPJ7ipugPJ7il0BlvcUuhYZb3FTcWGW9xS4sMt7ilxYFwHJQ5AtVSQgCEBAEAQBAEAQBAEB02wmtP03V2V3PxWtHceO53YfbgH0LWlLLIrJXR6xDekjcC1zgQMY7hniF2uNzG5uaOoRarLLWtwwuiczAY4Ag8eIIPNZzjZGcqVOclOS1WzNpJC3qr4IA2Ibha3AGGZGOCxmm42WjN6ajCSdtOJ8x6nUfp2o2aT+LoJXR57wDwPrVoSkkkzR2butiLvK+dkWJmkVpb2qVKsAzJLM1rR61EqjtoWilmV9j6Ts0Ktqi2tqVaKwxjAHCRoI4BUjmaWY53TpRm5U1bvNMdZjjqsr1IBAyPDWtZ5oYBjHo7FsqdkLmj1jWG0NPmuzvLxEzyc83HkB7cKZPJG5K1Z4xftzXrk1qw7elldvOK4G7u5uR1ACAIAgCAIAgCAIAgCAIAgCAIAgCAIAgLmOLHBzTggghAetaTqTb2nw2GuBLmje48j2r0oSzxTOaasyYJyHAgnI5ehaWIJM2sW5q4ryTuMfce3xKrkQucRtboUtybr1Jm/IRiWMEZPpCyqU9bo0hPgcgadpsnRurTB+cY3Cs7M0ujs9i9In063HqtlpjmYPoWHsP2j8FpCnfVmc58jt7uuW7oDZX7rO1jOAPitIwSM73IQmz4q1gcb8oOo7za1Fp4ZMr8ewfmuTEy2ia0lxOKK5TUogCAIAgCAIAgCAIAgCgkIAgCAIAgCAIAgA9KA2ui61Y0uT6Py4XHy4zyPh3FaUqsqbKyipbnoFG5FerRz13AseO/iPQV6MJqaujmccuhnyVcgZKAZPLs7imgGUAyfYgMF65FSqvnsvDWNHtPcqymoLMyUrux5rqt1+oXX2ZObuQ7h2BeXObnK51JWViIqkhAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQG20LWZNKm5GSB5+kj/Mela0qrpsrKOY7qlqdO63Nedjj9k8CPUu+FWE9mc7g0TBx5cVoVGD3IDFNZggaXTTRsA5lzgMKrlFbsmzNFqW1lOuC2m02ZBydyYPXzKwniYrbU0VJvc5TU9WtanIH2X8G+axowGrjnUlN3ZtGKjsQFQkIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAICvZlAVDiCHAkO7CDxRAkMu22HyLMw8HlTmktmV0KO1C64eVbmP9ZU55cxlRgc9zzvPcXHvccqHsWB4t3u3KrcFqkBAEAQBAEAQBAEAQBAEAQH/2Q==",
    category: "FRONTEND",
    time: "3 min read",
    title: "How I Built Fully Responsive Websites using HTML, CSS & Tailwind",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1720274013734-b172a1c8c31e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    category: "REACT JS",
    time: "5 min read",
    title: "Creating Modern UI with React.js using Component-Based Design",
  },
  {
    img: "https://images.unsplash.com/photo-1758612898312-708f2ffdcd53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fG9ubGluZSUyMGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
    category: "PROJECT",
    time: "4 min read",
    title: "Developing Eduma Online Courses Platform with React & Tailwind",
  },
];

const Blog = () => {
  return (
    <section className="w-full py-16 border-b  border-gray-200">
      <div className=" px-7">

        {/* Top Text */}
        <p className="text-center text-sm tracking-widest text-orange-500 uppercase pb-5 font-medium">
          Visit my blog and keep your feedback
        </p>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl md:text-5xl font-bold text-gray-800 pb-20">
          My Blog
        </h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className=" bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-md overflow-hidden group transition duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt="blog"
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-orange-500 text-sm font-semibold tracking-wide">
                    {blog.category}
                  </span>

                  <span className="flex items-center gap-1 text-gray-400 text-sm">
                    <FiClock />
                    {blog.time}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 leading-snug group-hover:text-orange-500 transition duration-300">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;