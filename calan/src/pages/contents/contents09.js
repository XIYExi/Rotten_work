import styled from "styled-components";

const Content09GridWrapper = styled.div`
    
    
`

const Content09TitleWrapper = styled.div`
    
    //lg
  @media screen and (min-width: 1440px){
    @apply col-span-6;
  }
`

const Content09DescWrapper = styled.div`

    //lg
  @media screen and (min-width: 1440px){
    @apply col-span-6;
  }
`


export default function ContentComponent09(){

    return(
        <div className='w-full relative mx-auto text-align'>

            <Content09GridWrapper className='grid grid-cols-12 gap-x-[30px]'>

                <Content09TitleWrapper>
                    The Templates are Designed to Show You a Sense of Acceleration in the Website Design Process
                </Content09TitleWrapper>

                <Content09DescWrapper>
                    The product is beautifully designed for startups
                </Content09DescWrapper>


            </Content09GridWrapper>

        </div>
    )
}
