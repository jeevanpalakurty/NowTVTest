describe('can visit nowtv.com', function(){

    beforeEach( function(){
        browser.driver.get('http://localhost:8000');
    });

    it('user can successfully navigate to nowtv.com locahost', function(){
        expect( browser.driver.getCurrentUrl() ).toContain('movieList');
    });
    
    describe('on page load should show 20 movies', function(){
       
       it('should make an initial request for movies and load them', function(){
            var movieList = element.all(by.repeater('movie in getMovies().movies'));
             expect(movieList.count()).toEqual(20);
             expect(movieList.get(2).getText()).toContain('Edward Norton');
       }); 
    });
    
     describe('filterting items to 10 should restrict the count', function(){
       
       it('should display 10 items when no if items property is 10', function(){
           var pageSize = element(by.model('pageSize'));
           pageSize.clear();
           pageSize.sendKeys('10');
            
            var movieList = element.all(by.repeater('movie in getMovies().movies'));
            expect(movieList.count()).toEqual(10);
            expect(movieList.get(9).getText()).not.toContain('Edward Norton');
       }); 
       
        it('should display 160 items when no if items property is 160', function(){
           var pageSize = element(by.model('pageSize'));
           pageSize.clear();
           pageSize.sendKeys('160');
           var movieList = element.all(by.repeater('movie in getMovies().movies'));
           expect(movieList.count()).toEqual(160);
           expect(movieList.get(159).getText()).toContain('Samuel L Jackson');
           
       }); 
    });
    
    
     describe('Make sure correct number of page numbers displayed', function(){
       
       it('should display 8 pages when no of items per page is default value of 20', function(){
          
           var pageList = element.all(by.repeater('pageNumber in pages'));
            
            expect(pageList.count()).toEqual(8);
        
       }); 
       
       it('should display 3 pages when no of items per page is set to a value of 60', function(){
           
           var pageSize = element(by.model('pageSize'));
           pageSize.clear();
           pageSize.sendKeys('60');
           
           var pageList = element.all(by.repeater('pageNumber in pages'));
            
            expect(pageList.count()).toEqual(3);
        
       }); 
       
    });
    
     describe('search criteria should filter the result based on the title entered', function(){
       
       it('should filter from the initial load of movies', function(){
          
           var searchParam = element.all(by.model('query.title'));
            searchParam.clear();
            //entering two chars to see the filter fails.
            searchParam.sendKeys('Va');
            
           var pageList = element.all(by.repeater('movie in getMovies().movies'));
            
            expect(pageList.count()).toEqual(0);
            
            //enter at least 3 mtching chars to get the result
            searchParam.clear();
            searchParam.sendKeys('val');

            expect(pageList.count()).toEqual(1);
            
            var pageSize = element(by.model('pageSize'));
            pageSize.clear();
            //get 160 movies at a time
            pageSize.sendKeys('160');
            
            searchParam.clear();
            searchParam.sendKeys('League1');
            
            //expect pagelist i.e is number of items that should be displayed to be zero
            expect(pageList.count()).toEqual(0);
            
            searchParam.clear();
            searchParam.sendKeys('League');
            
            expect(pageList.count()).toEqual(1);
             
            var cssElements = element.all(by.css('li'));
            expect(cssElements.count()).toEqual(1);
            
       });
       
    });
    
});