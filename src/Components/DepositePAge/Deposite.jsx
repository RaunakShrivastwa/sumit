import React from 'react'

function Deposite() {
    return (
        <div className=' h-100 p-3 d-flex flex-column gap-4'>
            <div className='d-flex p-2 rounded  col-md-1 justify-content-center flex-column align-items-center' style={{ backgroundColor: '#9EE7E0' }} >
                <img width='40px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbUlEQVRogdVa3U9TSRTvw6rvmvgRfdTV/8JXX9zQW6rirsYHRV11fdCNri/ok8aIQGcoVk3UaCLWzm0rCIIrmNUIIlQ0RFFwN8vDboiCAayUUhjPmbbQ2g/mlunXJCfAveec+f3uOXPmC5NJQbM66WrNRXZqOqnRGGkBGQAZhb+DQvD38LMW1LHotAxtVPSdcSvRyQoLo79pOn0BgHhmQrrMjBxBXzkDbmY16wB4tYURf+bA40Vj9Av8rLI669ZmDXi5w7EEwn8UZEIV8ATBj8LI6S1NNcuUgrd67Buhg96sAU+ICHkJafWjEvCam1iy+tVTR2Mcxod5keDpHsj36ZyDj0ZCJyEY6AcyAl/K6P58Af9esFIZ/PIibUL5Bh4bCc1tK5ECb/XS9VDWxvINOgmJCc1l25QevLNiqSWH1cY4CerDcp46dXR6ciEn2zx2/nvbnazIdk/dwkQYOZ7i69etjcyIaR3sa77Gs9UOPrghlUpm5liTQEAsDyTCmG8C4SjQyjjw4YWZ3NqmEAhgpsQtAHFVKTuQCoFAZCwcih280kviQiEAUXguwOOAADazsoYyVWhyOpgALhgKqalC8xGY3eqtXmXCnZS0kaT4g1MJBAKhaaV9iCi4bNtNkS1eURIAqTLhPlWVw90NV/iR1lspUwjf7Wq4rC4CjDaZYLn6wYhRmfcSP/XYxWnPI3755WMh9p42Xudr4xe7WnjFEzf/mozATEi8Qx076KKNA2xR0Ncf4BN9GyNABrACjcgon2y/yxsHe3n9m+f82KN6XuquTan7JRhIIDCVJoWs4Os4DOLbbzp5w0AvP9HulCXwEQlMLaR4vrOJj09N8l/uyYXfKIFYwT7GAl/5uY77C+szGpAigM5CszOc9Xfz8ubrWSOwH3xjH9jX2WeN0gSkUghD/NfQO1Fh3n76j3ve+7it+6Go33sar8bpYoqdfuLhZ5565wTtY3XQBm1J95/CF/pE39jH97ppUwhYDMooR2UHTDaYo5d87bz17z7eP/I/H/aPi4H7edLP/x0b4YOjw/zV8FCcDMCzIXj3OeAXumiDtugDfaHPHUYmMj06iBWW0Z1eBz/UcjN5GYUqdBjK6M/3HEr6ChOAMpqriUx2EBuUKpgHaFkRE9hmwgWRkcVcwRCILubEfkAnXUVHQCcdc/sBPDgqNgJmVvtr3JZSZkNfKAQStpThNKJVxUIA0udCxscqeSfAyHjK6yl4eaLQCWgueiwpeGzhWxjqK2ACPWmPFkUqKTjcxX1D6z99cdL84fXivrxOJvCmKC34aMObkUI7XgdMP0mBjzbNTcrzDVwIzLiljOw1BH6eRP6vmPCmKCPw8yRsJVi6cg4exqHhtElJwlW9QUV1MiA9WEyUgI+2ze0VP+BFd1ajEbnoxpsipeBjG56lApGLKtdOwhejlTn9BxCxANTpYdiSdma0nxA2pAOPya3OyuU5A56smZl9JR60WsSCkDQDqX487cAjm4iM4DN8hzqoizYq+v4GO7UvRS8UfBwAAAAASUVORK5CYII=" alt="" />
                <h4>USDT</h4>


            </div>

            <div className='w-50 shadow-lg p-3'>
                
                <form>
                    <div className='mb-3 border p-3'>
                    <h4 className='text-center'>USDT - TRC20 Wallet Only</h4>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <img width='30px' src="https://cdn-icons-png.flaticon.com/128/2541/2541979.png" alt="" />
                        </span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Amount</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" value='0' aria-describedby="emailHelp" />
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Utr</label>
                        <input type="text" class="form-control" placeholder='utr' id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Upload Screenshot</label>
                        <input type="file" class="form-control" placeholder='Browse' id="exampleInputPassword1" />
                    </div>
                   
                    <button type="submit" class="btn btn-warning w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Deposite